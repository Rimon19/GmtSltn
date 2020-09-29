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
    public class OrderUomInfoesController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public OrderUomInfoesController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/OrderUomInfoes/Index
        [HttpGet("Index")]
        public IEnumerable<TblOrderUomInfo> GetTblOrderUomInfo()
        {
            return _context.TblOrderUomInfo;
        }

        // GET: api/OrderUomInfoes/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTblOrderUomInfo([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tblOrderUomInfo = await _context.TblOrderUomInfo.FindAsync(id);

            if (tblOrderUomInfo == null)
            {
                return NotFound();
            }

            return Ok(tblOrderUomInfo);
        }

        // PUT: api/OrderUomInfoes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblOrderUomInfo([FromRoute] int id, [FromBody] TblOrderUomInfo tblOrderUomInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tblOrderUomInfo.Uomid)
            {
                return BadRequest();
            }

            _context.Entry(tblOrderUomInfo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblOrderUomInfoExists(id))
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

        // POST: api/OrderUomInfoes
        [HttpPost]
        public async Task<IActionResult> PostTblOrderUomInfo([FromBody] TblOrderUomInfo tblOrderUomInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.TblOrderUomInfo.Add(tblOrderUomInfo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTblOrderUomInfo", new { id = tblOrderUomInfo.Uomid }, tblOrderUomInfo);
        }

        // DELETE: api/OrderUomInfoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTblOrderUomInfo([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tblOrderUomInfo = await _context.TblOrderUomInfo.FindAsync(id);
            if (tblOrderUomInfo == null)
            {
                return NotFound();
            }

            _context.TblOrderUomInfo.Remove(tblOrderUomInfo);
            await _context.SaveChangesAsync();

            return Ok(tblOrderUomInfo);
        }

        private bool TblOrderUomInfoExists(int id)
        {
            return _context.TblOrderUomInfo.Any(e => e.Uomid == id);
        }
    }
}