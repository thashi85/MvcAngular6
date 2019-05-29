using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Web;

namespace MvcAngular6.Models
{
    public enum CompressMode
    {
        Deflate,
        Gzip
    }
    public class CompressUtility
    {
        static byte[] DecompressGzip(byte[] gzip)
        {
            using (GZipStream stream = new GZipStream(new MemoryStream(gzip),
                                                      CompressionMode.Decompress))
            {
                const int size = 4096;
                byte[] buffer = new byte[size];
                using (MemoryStream memory = new MemoryStream())
                {
                    int count = 0;
                    do
                    {
                        count = stream.Read(buffer, 0, size);
                        if (count > 0)
                        {
                            memory.Write(buffer, 0, count);
                        }
                    }
                    while (count > 0);
                    return memory.ToArray();
                }
            }
        }
        private static byte[] Compress(Stream input, CompressMode mode)
        {
            if (mode == CompressMode.Deflate)
            {
                using (var compressStream = new MemoryStream())
                using (var compressor = new DeflateStream(compressStream, CompressionMode.Compress))
                {
                    input.CopyTo(compressor);
                    return compressStream.ToArray();
                }
            }else
            {
                using (var compressStream = new MemoryStream())
                using (var compressor = new GZipStream(compressStream, CompressionMode.Compress))
                {
                    input.CopyTo(compressor);
                    return compressStream.ToArray();
                }
            }
        }

        private static byte[] Decompress(byte[] input, CompressMode mode)
        {
            var output = new MemoryStream();
            if (mode == CompressMode.Deflate)
            {
                using (var compressStream = new MemoryStream(input))
                using (var decompressor = new DeflateStream(compressStream, CompressionMode.Decompress))
                    decompressor.CopyTo(output);

                output.Position = 0;
                return output.ToArray();
            }else
            {
                using (var compressStream = new MemoryStream(input))
                using (var decompressor = new DeflateStream(compressStream, CompressionMode.Decompress))
                    decompressor.CopyTo(output);

                output.Position = 0;
                return output.ToArray();
            }
        }
        public static string ConverDateTimeToISOString(DateTime? dt)
        {
            if (dt != null && dt.HasValue)
            {
                return dt.Value.ToString("O");
            }
            return "";
        }
    }
}