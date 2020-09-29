using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication1.Models;
using WebApplication1.Repository;

namespace WebApplication1.Controllers
{
    public class AccountController : Controller
    {
        public virtual PartialViewResult Menu()
        {
            IEnumerable<Menu> Menu = null;

            if (Session["_Menu"] != null)
            {
                Menu = (IEnumerable<Menu>)Session["_Menu"];
            }
            else
            {
                Menu = MenuData.GetMenus("3ab8f2ba-dcf4-49c2-afb2-e605ac486fbb");// pass employee id here
                Session["_Menu"] = Menu;
            }
            return PartialView("_Menu", Menu);
        }
    }
}