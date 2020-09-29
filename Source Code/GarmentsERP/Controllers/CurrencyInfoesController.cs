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
    public class CurrencyInfoesController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public CurrencyInfoesController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/CurrencyInfoes/Index
        [HttpGet("Index")]
        public IEnumerable<TblCurrencyInfo> GetTblCurrencyInfo()
        {
            return _context.TblCurrencyInfo;
        }

        // GET: api/CurrencyInfoes/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTblCurrencyInfo([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tblCurrencyInfo = await _context.TblCurrencyInfo.FindAsync(id);

            if (tblCurrencyInfo == null)
            {
                return NotFound();
            }

            return Ok(tblCurrencyInfo);
        }

        // PUT: api/CurrencyInfoes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblCurrencyInfo([FromRoute] int id, [FromBody] TblCurrencyInfo tblCurrencyInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tblCurrencyInfo.CurrencyId)
            {
                return BadRequest();
            }

            _context.Entry(tblCurrencyInfo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblCurrencyInfoExists(id))
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

        // POST: api/CurrencyInfoes
        [HttpPost]
        public async Task<IActionResult> PostTblCurrencyInfo([FromBody] TblCurrencyInfo tblCurrencyInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.TblCurrencyInfo.Add(tblCurrencyInfo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTblCurrencyInfo", new { id = tblCurrencyInfo.CurrencyId }, tblCurrencyInfo);
        }

        // DELETE: api/CurrencyInfoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTblCurrencyInfo([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tblCurrencyInfo = await _context.TblCurrencyInfo.FindAsync(id);
            if (tblCurrencyInfo == null)
            {
                return NotFound();
            }

            _context.TblCurrencyInfo.Remove(tblCurrencyInfo);
            await _context.SaveChangesAsync();

            return Ok(tblCurrencyInfo);
        }

        private bool TblCurrencyInfoExists(int id)
        {
            return _context.TblCurrencyInfo.Any(e => e.CurrencyId == id);
        }
    }
}