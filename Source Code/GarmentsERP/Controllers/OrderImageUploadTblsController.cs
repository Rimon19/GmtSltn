using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GarmentsERP.Model;
using Microsoft.AspNetCore.Hosting;
using System.IO;
using System.Net.Http.Headers;

namespace GarmentsERP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderImageUploadTblsController : ControllerBase
    {
        private readonly GarmentERPContext _context;
        private IHostingEnvironment _hostingEnvironment;

        public OrderImageUploadTblsController(GarmentERPContext context, IHostingEnvironment hostingEnvironment)
        {
            _context = context;
            _hostingEnvironment = hostingEnvironment;
        }

        // POST: api/OrderImageUploadTbls
        //[HttpPost("upload{id}"), DisableRequestSizeLimit]
        [HttpPost("{pAutoID}")]
        public ActionResult UploadFile(int pAutoID)
        {
            try
            {
                var file = Request.Form.Files[0];



                string folderName = "UploadOrderImage";
                string webRootPath = _hostingEnvironment.WebRootPath;
                string newPath = Path.Combine(webRootPath, folderName);
                if (!Directory.Exists(newPath))
                {
                    Directory.CreateDirectory(newPath);
                }

                if (file.Length > 0)
                {
                    //int max0 = _context.TblInitialOrder.OrderByDescending(p => p.OrderAutoId).FirstOrDefault().OrderAutoId;
                    //int maximumoderid = max0 + 1;
                    //string ordid = Convert.ToString(maximumoderid);

                    string fileName = pAutoID + "_" + ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    string fullPath = Path.Combine(newPath, fileName);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);


                    }


                    int orderid = Convert.ToInt32(pAutoID);

                    var orderimagetbl = _context.OrderImageUploadTbl.FirstOrDefault(x => x.InitialOrderId == orderid);

                   


                    if (orderimagetbl == null)
                    {

                        OrderImageUploadTbl orderImage = new OrderImageUploadTbl();
                        //var max = _context.TblInitialOrder.OrderByDescending(p => p.OrderAutoId).FirstOrDefault().OrderAutoId;


                        orderImage.FileName = fileName;
                        orderImage.FileSize = fileName;
                        orderImage.InitialOrderId = pAutoID; //Convert.ToInt32(max)+1;
                        orderImage.ImgPath = "/" + folderName + "/" + fileName;


                        _context.OrderImageUploadTbl.Add(orderImage);
                        _context.SaveChanges();

                    }
                    else
                    {

                        OrderImageUploadTbl orderImage1 = _context.OrderImageUploadTbl.FirstOrDefault(x => x.InitialOrderId == pAutoID);
                        var a = orderImage1.OrderImgUploadId;
                        orderImage1.ImgPath = "/" + folderName + "/" + fileName;
                        _context.Entry(orderImage1).State = EntityState.Modified;
                        _context.SaveChanges();
                    }

                }



                return Ok();

            }
            catch (System.Exception ex)
            {
                return NoContent();// Json("Upload Failed: " + ex.Message);
            }
        }


        // GET: api/OrderImageUploadTbls
        [HttpGet]
        public IEnumerable<OrderImageUploadTbl> GetOrderImageUploadTbl()
        {
            return _context.OrderImageUploadTbl;
        }

        // GET: api/OrderImageUploadTbls/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetOrderImageUploadTbl([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var orderImageUploadTbl = await _context.OrderImageUploadTbl.FindAsync(id);

            if (orderImageUploadTbl == null)
            {
                return NotFound();
            }

            return Ok(orderImageUploadTbl);

        }

        // PUT: api/OrderImageUploadTbls/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrderImageUploadTbl([FromRoute] int id, [FromBody] OrderImageUploadTbl orderImageUploadTbl)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != orderImageUploadTbl.OrderImgUploadId)
            {
                return BadRequest();
            }

            _context.Entry(orderImageUploadTbl).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderImageUploadTblExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/OrderImageUploadTbls
        [HttpPost]
        public async Task<IActionResult> PostOrderImageUploadTbl([FromBody] OrderImageUploadTbl orderImageUploadTbl)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.OrderImageUploadTbl.Add(orderImageUploadTbl);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOrderImageUploadTbl", new { id = orderImageUploadTbl.OrderImgUploadId }, orderImageUploadTbl);
        }

        // DELETE: api/OrderImageUploadTbls/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrderImageUploadTbl([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var orderImageUploadTbl = await _context.OrderImageUploadTbl.FindAsync(id);
            if (orderImageUploadTbl == null)
            {
                return NotFound();
            }

            _context.OrderImageUploadTbl.Remove(orderImageUploadTbl);
            await _context.SaveChangesAsync();

            return Ok(orderImageUploadTbl);
        }

        private bool OrderImageUploadTblExists(int id)
        {
            return _context.OrderImageUploadTbl.Any(e => e.OrderImgUploadId == id);
        }
    }
}