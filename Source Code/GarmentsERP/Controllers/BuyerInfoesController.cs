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
    public class BuyerInfoesController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public BuyerInfoesController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/BuyerInfoes/Index
        [HttpGet("Index")]
        public IEnumerable<TblBuyerInfo> GetTblBuyerInfo()
        {
            return _context.TblBuyerInfo;
        }

        // GET: api/BuyerInfoes/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTblBuyerInfo([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tblBuyerInfo = await _context.TblBuyerInfo.FindAsync(id);

            if (tblBuyerInfo == null)
            {
                return NotFound();
            }

            return Ok(tblBuyerInfo);
        }

        // PUT: api/BuyerInfoes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblBuyerInfo([FromRoute] int id, [FromBody] TblBuyerInfo tblBuyerInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tblBuyerInfo.BuyerId)
            {
                return BadRequest();
            }

            _context.Entry(tblBuyerInfo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblBuyerInfoExists(id))
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

        // POST: api/BuyerInfoes
        [HttpPost]
        public async Task<IActionResult> PostTblBuyerInfo([FromBody] TblBuyerInfo tblBuyerInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.TblBuyerInfo.Add(tblBuyerInfo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTblBuyerInfo", new { id = tblBuyerInfo.BuyerId }, tblBuyerInfo);
        }

        // DELETE: api/BuyerInfoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTblBuyerInfo([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tblBuyerInfo = await _context.TblBuyerInfo.FindAsync(id);
            if (tblBuyerInfo == null)
            {
                return NotFound();
            }

            _context.TblBuyerInfo.Remove(tblBuyerInfo);
            await _context.SaveChangesAsync();

            return Ok(tblBuyerInfo);
        }

        private bool TblBuyerInfoExists(int id)
        {
            return _context.TblBuyerInfo.Any(e => e.BuyerId == id);
        }
    }
}