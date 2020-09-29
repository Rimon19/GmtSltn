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
    public class DealingMrcndiserInfoesController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public DealingMrcndiserInfoesController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/DealingMrcndiserInfoes/Index
        [HttpGet("Index")]
        public IEnumerable<TblDealingMrcndiserInfo> GetTblDealingMrcndiserInfo()
        {
            return _context.TblDealingMrcndiserInfo;
        }

        // GET: api/DealingMrcndiserInfoes/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTblDealingMrcndiserInfo([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tblDealingMrcndiserInfo = await _context.TblDealingMrcndiserInfo.FindAsync(id);

            if (tblDealingMrcndiserInfo == null)
            {
                return NotFound();
            }

            return Ok(tblDealingMrcndiserInfo);
        }

        // PUT: api/DealingMrcndiserInfoes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblDealingMrcndiserInfo([FromRoute] int id, [FromBody] TblDealingMrcndiserInfo tblDealingMrcndiserInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tblDealingMrcndiserInfo.Id)
            {
                return BadRequest();
            }

            _context.Entry(tblDealingMrcndiserInfo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblDealingMrcndiserInfoExists(id))
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

        // POST: api/DealingMrcndiserInfoes
        [HttpPost]
        public async Task<IActionResult> PostTblDealingMrcndiserInfo([FromBody] TblDealingMrcndiserInfo tblDealingMrcndiserInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.TblDealingMrcndiserInfo.Add(tblDealingMrcndiserInfo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTblDealingMrcndiserInfo", new { id = tblDealingMrcndiserInfo.Id }, tblDealingMrcndiserInfo);
        }

        // DELETE: api/DealingMrcndiserInfoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTblDealingMrcndiserInfo([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tblDealingMrcndiserInfo = await _context.TblDealingMrcndiserInfo.FindAsync(id);
            if (tblDealingMrcndiserInfo == null)
            {
                return NotFound();
            }

            _context.TblDealingMrcndiserInfo.Remove(tblDealingMrcndiserInfo);
            await _context.SaveChangesAsync();

            return Ok(tblDealingMrcndiserInfo);
        }

        private bool TblDealingMrcndiserInfoExists(int id)
        {
            return _context.TblDealingMrcndiserInfo.Any(e => e.Id == id);
        }
    }
}