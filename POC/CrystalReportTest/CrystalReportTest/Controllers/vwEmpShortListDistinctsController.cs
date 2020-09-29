using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using CrystalReportTest.Models;
using CrystalDecisions.CrystalReports.Engine;
using System.IO;
using System.ComponentModel;
using CrystalReportTest.Reports;
using System.Configuration;
using System.Data.SqlClient;

namespace CrystalReportTest.Controllers
{
    public class vwEmpShortListDistinctsController : Controller
    {
        private dbHRMEntities db = new dbHRMEntities();

        // GET: vwEmpShortListDistincts
        public ActionResult Index()
        {
            return View(db.vwEmpShortListDistincts.ToList());
        }

        // GET: vwEmpShortListDistincts/Details/5
        public ActionResult Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            vwEmpShortListDistinct vwEmpShortListDistinct = db.vwEmpShortListDistincts.Find(id);
            if (vwEmpShortListDistinct == null)
            {
                return HttpNotFound();
            }
            return View(vwEmpShortListDistinct);
        }

        //vwEmpShortListDistincts/ExportCustomers
        public ActionResult ExportCustomers()
        {
            var connectionString = ConfigurationManager.ConnectionStrings["dbHRMEntities"].ConnectionString;

            ReportDocument rptDoc = new ReportDocument();

            rptDoc.Load(Path.Combine(Server.MapPath("~/Reports"), "rpEmpIDWise_ShortList.rpt"));

            SqlConnection cnn = new SqlConnection(connectionString);
            cnn.Open();
            SqlCommand cmd = new SqlCommand("Select top 100 * From vwEmpShortListDistinct", cnn);
            cmd.CommandType = CommandType.Text;
            SqlDataAdapter sda = new SqlDataAdapter(cmd);
            DataSet ds = new DataSet();
            sda.Fill(ds, "Product");

            cnn.Close();
            rptDoc.SetDataSource(ds.Tables[0]);

            Response.Buffer = false;
            Response.ClearContent();
            Response.ClearHeaders();


            Stream stream = rptDoc.ExportToStream(CrystalDecisions.Shared.ExportFormatType.PortableDocFormat);
            stream.Seek(0, SeekOrigin.Begin);

            return File(stream, "application/pdf", "CustomerList.pdf");

        }

        // GET: vwEmpShortListDistincts/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: vwEmpShortListDistincts/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Emp_Id,Present_Salary,Join_Date,ServiceUpto,Desig_Name,Comp_Name,Dept_Name,Emp_Name,Emp_dob,Perm_Add,Pres_Add,CardID,Head_Quarter,Grade_Name,TotalOthersAllowance,Special,OldID,Area,Zone,Sheet,Section,BankName,TimeZone,Insurance,TimeZoneID,Emp_BGroup,Religion,Emp_Ref1,Emp_Ref2,X_Emp,Sex,M_Status,AcademicRecords,EntryDate,Job_Cat,Job_Type,Emp_Type,Cont_Num,EmailAddress,Personal_Phone")] vwEmpShortListDistinct vwEmpShortListDistinct)
        {
            if (ModelState.IsValid)
            {
                db.vwEmpShortListDistincts.Add(vwEmpShortListDistinct);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(vwEmpShortListDistinct);
        }

        // GET: vwEmpShortListDistincts/Edit/5
        public ActionResult Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            vwEmpShortListDistinct vwEmpShortListDistinct = db.vwEmpShortListDistincts.Find(id);
            if (vwEmpShortListDistinct == null)
            {
                return HttpNotFound();
            }
            return View(vwEmpShortListDistinct);
        }

        // POST: vwEmpShortListDistincts/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Emp_Id,Present_Salary,Join_Date,ServiceUpto,Desig_Name,Comp_Name,Dept_Name,Emp_Name,Emp_dob,Perm_Add,Pres_Add,CardID,Head_Quarter,Grade_Name,TotalOthersAllowance,Special,OldID,Area,Zone,Sheet,Section,BankName,TimeZone,Insurance,TimeZoneID,Emp_BGroup,Religion,Emp_Ref1,Emp_Ref2,X_Emp,Sex,M_Status,AcademicRecords,EntryDate,Job_Cat,Job_Type,Emp_Type,Cont_Num,EmailAddress,Personal_Phone")] vwEmpShortListDistinct vwEmpShortListDistinct)
        {
            if (ModelState.IsValid)
            {
                db.Entry(vwEmpShortListDistinct).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(vwEmpShortListDistinct);
        }

       
        // GET: vwEmpShortListDistincts/Delete/5
        public ActionResult Delete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            vwEmpShortListDistinct vwEmpShortListDistinct = db.vwEmpShortListDistincts.Find(id);
            if (vwEmpShortListDistinct == null)
            {
                return HttpNotFound();
            }
            return View(vwEmpShortListDistinct);
        }

        // POST: vwEmpShortListDistincts/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            vwEmpShortListDistinct vwEmpShortListDistinct = db.vwEmpShortListDistincts.Find(id);
            db.vwEmpShortListDistincts.Remove(vwEmpShortListDistinct);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
