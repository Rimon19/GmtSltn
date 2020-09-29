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
    public class PoStatusController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public PoStatusController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/PoStatus/Index
        [HttpGet("Index")]
        public IEnumerable<TblPoStatus> GetTblPoStatus()
        {
            return _context.TblPoStatus;
        }

        // GET: api/PoStatus/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTblPoStatus([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tblPoStatus = await _context.TblPoStatus.FindAsync(id);

            if (tblPoStatus == null)
            {
                return NotFound();
            }

            return Ok(tblPoStatus);
        }

        // PUT: api/PoStatus/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblPoStatus([FromRoute] int id, [FromBody] TblPoStatus tblPoStatus)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tblPoStatus.Id)
            {
                return BadRequest();
            }

            _context.Entry(tblPoStatus).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblPoStatusExists(id))
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

        // POST: api/PoStatus
        [HttpPost]
        public async Task<IActionResult> PostTblPoStatus([FromBody] TblPoStatus tblPoStatus)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.TblPoStatus.Add(tblPoStatus);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTblPoStatus", new { id = tblPoStatus.Id }, tblPoStatus);
        }

        // DELETE: api/PoStatus/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTblPoStatus([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tblPoStatus = await _context.TblPoStatus.FindAsync(id);
            if (tblPoStatus == null)
            {
                return NotFound();
            }

            _context.TblPoStatus.Remove(tblPoStatus);
            await _context.SaveChangesAsync();

            return Ok(tblPoStatus);
        }

        private bool TblPoStatusExists(int id)
        {
            return _context.TblPoStatus.Any(e => e.Id == id);
        }
    }
}