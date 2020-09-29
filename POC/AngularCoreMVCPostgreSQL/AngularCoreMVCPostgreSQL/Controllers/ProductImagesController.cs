using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularCoreMVCPostgreSQL.Models;
using System.Net.Http;
using System.Web.Http;
using System.Web;
using Microsoft.AspNetCore.Hosting;
using System.IO;
using System.Net.Http.Headers;

namespace AngularCoreMVCPostgreSQL.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductImagesController : ControllerBase
    {
        private readonly dbTestContext _context;
        private IHostingEnvironment _hostingEnvironment;

        public ProductImagesController(dbTestContext context, IHostingEnvironment hostingEnvironment)
        {
            _context = context;
            _hostingEnvironment = hostingEnvironment;
        }

        // GET: api/ProductImages
        [HttpGet]
        public IEnumerable<ProductImage> GetProductImage()
        {
            return _context.ProductImage;
        }


        //[HttpPost("UploadImage")]
        //public HttpResponseMessage UploadJsonFile()
        //{
        //    HttpResponseMessage response = new HttpResponseMessage();
        //    var httpRequest = HttpContext.Request;
        //    if (httpRequest.Form.Files.Count > 0)
        //    {
        //        foreach (IFormFile file in httpRequest.Form.Files)
        //        {
        //            var postedFile = httpRequest.Form.Files[file.Name];
        //            var filePath = HttpContext.Current.Server.MapPath("~/UploadFile/" + postedFile.FileName);
        //            postedFile.SaveAs(filePath);
        //        }
        //    }
        //    return response;
        //}

        [HttpPost("upload"), DisableRequestSizeLimit]
        public ActionResult UploadFile()
        {
            try
            {
                var file = Request.Form.Files[0];
                string folderName = "Upload";
                string webRootPath = _hostingEnvironment.WebRootPath;
                string newPath = Path.Combine(webRootPath, folderName);
                if (!Directory.Exists(newPath))
                {
                    Directory.CreateDirectory(newPath);
                }

              

                if (file.Length > 0)
                {
                    

                    ProductImage productImage = new ProductImage();
                    productImage.ProductId = "1";
                    //Upload image to the folder
                    string fileName = "1_"+ ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    string fullPath = Path.Combine(newPath, fileName);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }

                    productImage.FileName = fileName;
                    productImage.FileSize = fileName;
                    productImage.ImagePath = "/" + folderName + "/" + fileName;
                    // I have just add it manually and it can be passed as a parameter in UploadFile() Method. 

                    _context.ProductImage.Add(productImage);
                   _context.SaveChanges();
                     
                }

                return Ok();
             
            }
            catch (System.Exception ex)
            {
                return NoContent();// Json("Upload Failed: " + ex.Message);
            }
        }

        // GET: api/ProductImages/5
        [HttpGet("{id}")]
        public IActionResult GetProductImage([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var productImage =  _context.ProductImage.Where(i => i.ProductId == id.ToString());

            if (productImage == null)
            {
                return NotFound();
            }

            return Ok(productImage);
        }

        // PUT: api/ProductImages/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProductImage([FromRoute] int id, [FromBody] ProductImage productImage)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != productImage.FileUploadId)
            {
                return BadRequest();
            }

            _context.Entry(productImage).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductImageExists(id))
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

        // POST: api/ProductImages
        [HttpPost]
        public async Task<IActionResult> PostProductImage([FromBody] ProductImage productImage)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.ProductImage.Add(productImage);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProductImage", new { id = productImage.FileUploadId }, productImage);
        }

        // DELETE: api/ProductImages/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProductImage([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var productImage = await _context.ProductImage.FindAsync(id);
            if (productImage == null)
            {
                return NotFound();
            }

            _context.ProductImage.Remove(productImage);
            await _context.SaveChangesAsync();

            return Ok(productImage);
        }

        private bool ProductImageExists(int id)
        {
            return _context.ProductImage.Any(e => e.FileUploadId == id);
        }
    }
}