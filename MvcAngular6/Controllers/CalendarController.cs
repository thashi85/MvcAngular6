using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Mail;
using System.Net.Mime;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace MvcAngular6.Controllers
{
    public class CalendarController : Controller
    {
        // GET: Calendar
        public ActionResult Index()
        {
            var receiver = "thakshila@programus.co.uk";
            var fromAddress = "optimoqa@gmail.com";
            var eventVenue = "test venue";
            var meetingDate = new DateTime(2019, 03, 25, 10, 30, 0);
            var TimeFormat = "dd-MMM-yyyy hh:mm tt";
            var startTime = new DateTime(2019, 03, 25, 10, 30, 0);
            var finishTime = new DateTime(2019, 03, 25, 11, 30, 0);
            var meetingTypeName = "Test Meeting";

            var filePath = Path.Combine(HttpRuntime.AppDomainAppPath, "Resource/calenderInvitation.ics");
            var fileContent = System.IO.File.OpenText(filePath).ReadToEnd();
            fileContent = fileContent.Replace("#TO#", receiver);
            fileContent = fileContent.Replace("#FROM#", fromAddress);
            fileContent = fileContent.Replace("#LOCATION#", eventVenue);
            fileContent = fileContent.Replace("#UID#", Guid.NewGuid().ToString().Replace("-", ""));
            fileContent = fileContent.Replace("#CREATED-AT#", Convert.ToDateTime(meetingDate).ToString(TimeFormat));
            fileContent = fileContent.Replace("#DTSTART#", Convert.ToDateTime(startTime).ToString(TimeFormat));
            fileContent = fileContent.Replace("#DTEND#", Convert.ToDateTime(finishTime).ToString(TimeFormat));

            //filePath = Path.Combine(HttpRuntime.AppDomainAppPath, "Email/InvitationEmail.html");
            //fileInviationContent = System.IO.File.OpenText(filePath).ReadToEnd();
            //String body = AppendRedirectURl(fileInviationContent, callBackUrl);
            fileContent = fileContent.Replace("#X-ALT-DESC#", "");

            fileContent = fileContent.Replace("#HEADING#", meetingTypeName);

            MailMessage message = new MailMessage();
            // message.IsBodyHtml = true;
            message.From = new MailAddress(fromAddress);
            message.To.Add(new MailAddress(receiver));
            message.Subject = string.Format("{0}  {1} @ {2} {3} {4} {5} - {6}", "Invitation: ", meetingTypeName,
                Convert.ToDateTime(meetingDate).ToString("dddd"), Convert.ToDateTime(startTime).ToString("MMMM"),
                Convert.ToDateTime(startTime).ToString("yyyy"), startTime,
                finishTime);

            var iCalendarContentType = new ContentType("text/calendar; method=REQUEST");
            var calendarView = AlternateView.CreateAlternateViewFromString(fileContent, iCalendarContentType);
            calendarView.TransferEncoding = TransferEncoding.SevenBit;
            message.AlternateViews.Add(calendarView);
            testTask();

            //Task.Run(() => sendEmail(message));
            return View();
        }

        public async void sendEmail(MailMessage message)
        {
            SmtpClient smtp = new SmtpClient("auth.smtp.1and1.co.uk");//smtp.gmail.com
            smtp.Port = 25;
            //smtp.EnableSsl = true;
            smtp.Credentials = new System.Net.NetworkCredential("thakshila@salestar.co.uk", "Thakshi8890");

            await smtp.SendMailAsync(message);
        }
        public void testTask()
        {
            string sub = "Test demo";
            string body = "Testing Task demo";

            //Create a message object
            MailMessage msg = new MailMessage();
            msg.From = new MailAddress("thakshila@salestar.co.uk");
            msg.To.Add(new MailAddress("thakshila@programus.co.uk"));
            msg.Subject = sub;
            // msg.BodyEncoding = System.Text.Encoding.UTF8;
            msg.Body = body;

            //Set the date/time
            DateTime start = DateTime.Parse("Apr 1, 2019");
            DateTime end = DateTime.Parse("Apr 2, 2019");
            DateTime ex = DateTime.Now;

            //Location where you want to save the vCalendar file
            string attachUrl = Server.MapPath("~/Resource/test.vcs");

            //Create task
            using (StreamWriter sw = new StreamWriter(attachUrl))
            {
                sw.Write(CreateTask(start, end, sub, body));
            }

            //Attach the task
            Attachment mAttachment = new Attachment(attachUrl);
            msg.Attachments.Add(mAttachment);

            //var iCalendarContentType = new ContentType("text/calendar; method=REQUEST");
            //var calendarView = AlternateView.CreateAlternateViewFromString(CreateTask(start, end, sub, body), iCalendarContentType);
            //calendarView.TransferEncoding = TransferEncoding.SevenBit;
            //msg.AlternateViews.Add(calendarView);
            Task.Run(() => sendEmail(msg));
            //Create task
            //    using (StreamWriter sw = new StreamWriter(attachUrl)
            //    {
            //      sw.Write(CreateTask (start, end, sub, body));
            //}

            //            //Attach the task
            //            MailAttachment mAttachment = new MailAttachment(attachUrl);
            //            msg.Attachments.Add(mAttachment);

            //    //Send
            //    SmtpMail.SmtpServer = "some-smtp-mail-server.com";
            //    SmtpMail.Send(msg);
        }

        string CreateTask(DateTime start, DateTime end, string sub, string msgBody)
        {
            StringBuilder sbvCalendar = new StringBuilder();

            //Header
            sbvCalendar.Append("METHOD: REQUEST");
            sbvCalendar.Append("\n");
            sbvCalendar.Append("BEGIN:VCALENDAR");
            sbvCalendar.Append("\n");
            sbvCalendar.Append("PRODID:-//Microsoft Corporation//Outlook ");
            sbvCalendar.Append("\n");
            sbvCalendar.Append("MIMEDIR//ENVERSION:1.0");
            sbvCalendar.Append("\n");
            sbvCalendar.Append("BEGIN:VEVENT");
            sbvCalendar.Append("\n");

            //DTSTART 
            sbvCalendar.Append("DTSTART:");
            string hour = start.Hour.ToString();
            if (hour.Length < 2) { hour = "0" + hour; }

            string min = start.Minute.ToString();
            if (min.Length < 2) { min = "0" + min; }

            string sec = start.Second.ToString();
            if (sec.Length < 2) { sec = "0" + sec; }

            string mon = start.Month.ToString();
            if (mon.Length < 2) { mon = "0" + mon; }

            string day = start.Day.ToString();
            if (day.Length < 2) { day = "0" + day; }

            sbvCalendar.Append(start.Year.ToString() + mon + day
                                   + "T" + hour + min + sec);
            sbvCalendar.Append("\n");

            //DTEND
            sbvCalendar.Append("DTEND:");
            hour = end.Hour.ToString();
            if (hour.Length < 2) { hour = "0" + hour; }

            min = end.Minute.ToString();
            if (min.Length < 2) { min = "0" + min; }

            sec = end.Second.ToString();
            if (sec.Length < 2) { sec = "0" + sec; }

            mon = end.Month.ToString();
            if (mon.Length < 2) { mon = "0" + mon; }

            day = end.Day.ToString();
            if (day.Length < 2) { day = "0" + day; }

            sbvCalendar.Append(end.Year.ToString() + mon +
                         day + "T" + hour + min + sec);
            sbvCalendar.Append("\n");

            //Location
            sbvCalendar.Append("LOCATION;ENCODING=QUOTED-PRINTABLE: "
                                                     + String.Empty);
            sbvCalendar.Append("\n");

            //Message body
            sbvCalendar.Append("DESCRIPTION;ENCODING=QUOTED-PRINTABLE:"
                                                            + msgBody);
            sbvCalendar.Append("\n");

            //Subject
            sbvCalendar.Append("SUMMARY;ENCODING=QUOTED-PRINTABLE:"
                                                            + sub);
            sbvCalendar.Append("\n");

            //Priority
            sbvCalendar.Append("PRIORITY:3");
            sbvCalendar.Append("\n");
            sbvCalendar.Append("END:VEVENT");
            sbvCalendar.Append("\n");
            sbvCalendar.Append("END:VCALENDAR");
            sbvCalendar.Append("\n");

            return sbvCalendar.ToString();
        }

        public ActionResult Ical()
        {
            string sub = "Test demo Ical";
            string body = "Testing Task demo Ical";

            //Create a message object
            MailMessage msg = new MailMessage();
            msg.From = new MailAddress("thakshila@salestar.co.uk");
            msg.To.Add(new MailAddress("thakshila@programus.co.uk"));
            msg.Subject = sub;
            // msg.BodyEncoding = System.Text.Encoding.UTF8;
            msg.Body = body;

            //Set the date/time
            DateTime start = DateTime.Parse("Mar 15, 2019");
            DateTime end = DateTime.Parse("Mar 15, 2019");
            DateTime ex = DateTime.Now;

            var icalGen = new iCalFor.Net.ICalGenerator();
            var events = new List<iCalFor.Net.Model.CalendarEvent>();
            events.Add(new iCalFor.Net.Model.CalendarEvent()
            {
                UID=DateTime.Now.Ticks.ToString(),
                Summary = "Test 1",
                Description = "Test desc 1",
                StartTimeInUTC = new DateTime(2019, 3, 15, 10, 30, 0).ToUniversalTime().ToString("o"),
                EndTimeInUTC = new DateTime(2019, 3, 15, 11, 30, 0).ToUniversalTime().ToString("o"),
                Location = "Loc 1"
            });
            events.Add(new iCalFor.Net.Model.CalendarEvent()
            {
                UID = DateTime.Now.Ticks.ToString(),
                Summary = "Test 2",
                Description = "Test desc 2",
                StartTimeInUTC = new DateTime(2019, 3, 15, 2, 0, 0).ToUniversalTime().ToString("o"),
                EndTimeInUTC = new DateTime(2019, 3, 15, 3, 0, 0).ToUniversalTime().ToString("o"),
                Location = "Loc 2"
            });
            events.Add(new iCalFor.Net.Model.CalendarEvent()
            {
                UID = DateTime.Now.Ticks.ToString(),
                Summary = "Test 3",
                Description = "Test desc 3",
                StartTimeInUTC = new DateTime(2019, 3, 15, 18, 30, 0).ToUniversalTime().ToString("o"),
                EndTimeInUTC = new DateTime(2019, 3, 15, 20, 30, 0).ToUniversalTime().ToString("o"),
                Location = "Loc 3"
            });
            var content = icalGen.GeneratorICalFile(events);

            //Location where you want to save the vCalendar file
            string attachUrl = Server.MapPath("~/test.ics");

            //Create task
            using (StreamWriter sw = new StreamWriter(attachUrl))
            {
                sw.Write(content);
            }

            //Attach the task
            Attachment mAttachment = Attachment.CreateAttachmentFromString(content, new ContentType("text/calendar; method=REQUEST"));
            mAttachment.Name = "OPTIMO EVENT";
            msg.Attachments.Add(mAttachment);


            Task.Run(() => sendEmail(msg));

            return View();
        }

    }
}