using System.Web.Mvc;

namespace MvcAngular6.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        //public ActionResult Reflection()
        //{

        //    var count =Int32.Parse(Request.QueryString["count"].ToString());
        //    List<PackageItem> items = new List<PackageItem>();
        //    for(int i=0; i <count; i++)
        //    {
        //        items.Add(new PackageProductItem()
        //        {
        //            CalculatedPackageItemPriceGroups = new List<CalculatedPackageItemPriceGroup>()
        //            {
        //                new CalculatedPackageItemPriceGroup() { Id="1",PriceExcludingTax=i*10},
        //                new CalculatedPackageItemPriceGroup() { Id="2",PriceExcludingTax=i*20},
        //                new CalculatedPackageItemPriceGroup() { Id="3",PriceExcludingTax=i*30},
        //                new CalculatedPackageItemPriceGroup() { Id="4",PriceExcludingTax=i*40},
        //                new CalculatedPackageItemPriceGroup() { Id="5",PriceExcludingTax=i*50}

        //            }
        //        });
        //    }
        //    var start = DateTime.Now;
        //    foreach (var packageItem in items)
        //    {
        //        if (packageItem.GetType().GetProperties().Any(x => x.Name.Equals("CalculatedPackageItemPriceGroups")))
        //        {
                    
        //           var packageItemPriceInfo = (List<CalculatedPackageItemPriceGroup>)packageItem.GetType().GetProperty("CalculatedPackageItemPriceGroups").GetValue(packageItem, null);
        //            packageItemPriceInfo.ForEach(p =>
        //            {
        //                p.PriceExcludingTax = p.PriceExcludingTax*2;
        //            });
        //          //  packageItem.GetType().GetProperty("CalculatedPackageItemPriceGroups").SetValue(packageItem, packageItemPriceInfo);

        //        }
        //    }
        //    var end = DateTime.Now;

        //    var start1 = DateTime.Now;
        //    foreach (var packageItem in items)
        //    {
        //        var obj=(PackageProductItem)packageItem;               

        //            obj.CalculatedPackageItemPriceGroups.ForEach(p =>
        //            {
        //                p.PriceExcludingTax = p.PriceExcludingTax * 2;
        //            });
        //           // obj.CalculatedPackageItemPriceGroups= obj.CalculatedPackageItemPriceGroups;

                
        //    }
        //    var end1 = DateTime.Now;

        //    return View(new ReflectionTest ()
        //    {
        //        Start =start,
        //        End =end,
        //        Duration =(end-start).Milliseconds,
        //        ItemCount =count,
        //        Start1=start1,
        //        End1=end1
        //    });
        //}
    }
}