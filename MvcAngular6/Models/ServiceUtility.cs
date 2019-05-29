using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MvcAngular6.Models
{
    public class ServiceUtility
    {
        //Web API
    //    public static OptimoAPIResult<T> WebAPIRequest<T>(Enums.WebMethod webMethod, string webMethodUrl, List<Parameter> urlParam, object bodyParam, string id = "", string include = "", string fields = "", string token = "")
    //    {

    //        OptimoAPIResult<T> retObj = new OptimoAPIResult<T>();
    //        try
    //        {

    //            var postData = "";
    //            if (bodyParam != null)
    //            {
    //                //To serialize a POCO in json:api format
    //                postData = JsonConvert.SerializeObject(bodyParam, new JsonApiSerializerSettings());
    //            }

    //            var client = new RestClient(ServiceUtility.WebAPIBaseUrl + "/");
    //            client.AddDefaultHeader("Accept-Encoding", "gzip, deflate");
    //            {
    //                RestRequest request = new RestRequest();
    //                request.Resource = webMethodUrl;
    //                switch (webMethod)
    //                {
    //                    case Enums.WebMethod.GET:
    //                        request.Method = Method.GET;
    //                        if (urlParam != null && urlParam.Count > 0)
    //                        {
    //                            foreach (Parameter p in urlParam)
    //                            {
    //                                if (p.Value != null)
    //                                {
    //                                    request.AddQueryParameter(p.Name, p.Value.ToString());
    //                                }
    //                            }
    //                        }
    //                        if (!string.IsNullOrEmpty(include))
    //                            request.AddQueryParameter("include", include);
    //                        if (!string.IsNullOrEmpty(fields))
    //                            request.AddQueryParameter("fields", fields);
    //                        break;
    //                    case Enums.WebMethod.POST:
    //                        request.Method = Method.POST;
    //                        break;
    //                    case Enums.WebMethod.PUT:
    //                        request.Method = Method.PUT;
    //                        break;
    //                    case Enums.WebMethod.DELETE:
    //                        request.Method = Method.DELETE;
    //                        break;
    //                    case Enums.WebMethod.PATCH:
    //                        request.Method = Method.PATCH;
    //                        break;
    //                    default:
    //                        request.Method = Method.GET;
    //                        break;
    //                }
    //                if (string.IsNullOrEmpty(token))
    //                {
    //                    if (System.Web.HttpContext.Current.Session != null)
    //                    {
    //                        //Token
    //                        var tk = System.Web.HttpContext.Current.Session[Constants.SessionData.Token];
    //                        if (tk != null)
    //                            request.AddHeader(Constants.SessionData.Token, tk.ToString());
    //                    }
    //                }
    //                else
    //                {
    //                    request.AddHeader(Constants.SessionData.Token, token);
    //                }
    //                request.AddHeader("Accept", "application/json");

    //                //request.AddParameter("name", "value"); // adds to POST or URL querystring based on Method
    //                if (!string.IsNullOrEmpty(postData))
    //                {
    //                    //request.AddBody(postData);
    //                    request.AddParameter("application/json", postData, ParameterType.RequestBody);
    //                }

    //                if (!string.IsNullOrEmpty(id))
    //                    request.AddUrlSegment("id", id); // replaces matching token in request.Resource

    //                var st = DateTime.Now;
    //                var sec_protocol = ConfigurationManager.AppSettings["SecurityProtocolType"];
    //                if (sec_protocol != null && !string.IsNullOrEmpty(sec_protocol))
    //                {
    //                    ServicePointManager.SecurityProtocol = (SecurityProtocolType)Int32.Parse(sec_protocol);
    //                }


    //                IRestResponse res = client.Execute(request);
    //                //var content = res.Content;
    //                var content = "";
    //                if (res.ContentEncoding.ToLower() == "gzip")
    //                {
    //                    byte[] decompress = Decompress(res.RawBytes);
    //                    content = System.Text.ASCIIEncoding.ASCII.GetString(decompress);
    //                }
    //                else
    //                {
    //                    content = res.Content;
    //                }


    //                if ((ConfigurationManager.AppSettings["LogDetails"] != null && ConfigurationManager.AppSettings["LogDetails"] == "1"))
    //                {
    //                    LogRequest(request, res, (DateTime.Now - st).Milliseconds, client);
    //                }

    //                if (content.Length > 0)
    //                {
    //                    var apires = JsonConvert.DeserializeObject<ApiResponse>(content);
    //                    retObj.Errors = apires.Errors;
    //                    retObj.Meta = apires.Meta;
    //                    if (retObj.Errors == null || retObj.Errors.Count == 0)
    //                        retObj.Data = JsonConvert.DeserializeObject<T>(content, new JsonApiSerializerSettings());
    //                }
    //                if (res.StatusCode != HttpStatusCode.OK)
    //                {
    //                    retObj.IsError = true;
    //                    retObj.ErrorCode = ((Int32)res.StatusCode).ToString();
    //                    retObj.ErrorMessage = res.StatusDescription;
    //                }

    //            }
    //        }
    //        catch (Exception ex)
    //        {
    //            Log4netLogger<string>.LogError("ServiceUtility: WebAPIRequest :" + webMethodUrl, ex);
    //            throw ex;
    //        }
    //        return retObj;
    //    }
    }
}