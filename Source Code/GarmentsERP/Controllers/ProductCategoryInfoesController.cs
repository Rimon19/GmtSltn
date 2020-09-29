using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GarmentsERP.Model;

namespace GarmentsERP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductCategoryInfoesController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public ProductCategoryInfoesController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/ProductCategoryInfoes/Index
        [HttpGet("Index")]
        public IEnumerable<TblProductCategoryInfo> GetTblProductCategoryInfo()
        {
            return _context.TblProductCategoryInfo;
        }

        // GET: api/ProductCategoryInfoes/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTblProductCategoryInfo([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tblProductCategoryInfo = await _context.TblProductCategoryInfo.FindAsync(id);

            if (tblProductCategoryInfo == null)
            {
                return NotFound();
            }

            return Ok(tblProductCategoryInfo);
        }

        // PUT: api/ProductCategoryInfoes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblProductCategoryInfo([FromRoute] int id, [FromBody] TblProductCategoryInfo tblProductCategoryInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tblProductCategoryInfo.ProdCatId)
            {
                return BadRequest();
            }

            _context.Entry(tblProductCategoryInfo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblProductCategoryInfoExists(id))
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

        // POST: api/ProductCategoryInfoes
        [HttpPost]
        public async Task<IActionResult> PostTblProductCategoryInfo([FromBody] TblProductCategoryInfo tblProductCategoryInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.TblProductCategoryInfo.Add(tblProductCategoryInfo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTblProductCategoryInfo", new { id = tblProductCategoryInfo.ProdCatId }, tblProductCategoryInfo);
        }

        // DELETE: api/ProductCategoryInfoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTblProductCategoryInfo([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tblProductCategoryInfo = await _context.TblProductCategoryInfo.FindAsync(id);
            if (tblProductCategoryInfo == null)
            {
                return NotFound();
            }

            _context.TblProductCategoryInfo.Remove(tblProductCategoryInfo);
            await _context.SaveChangesAsync();

            return Ok(tblProductCategoryInfo);
        }

        private bool TblProductCategoryInfoExists(int id)
        {
            return _context.TblProductCategoryInfo.Any(e => e.ProdCatId == id);
        }
    }
}