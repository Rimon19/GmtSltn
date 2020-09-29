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
    public class PoOrderStatusInfoesController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public PoOrderStatusInfoesController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/PoOrderStatusInfoes/Index
        [HttpGet("Index")]
        public IEnumerable<TblPoOrderStatusInfo> GetTblPoOrderStatusInfo()
        {
            return _context.TblPoOrderStatusInfo;
        }

        // GET: api/PoOrderStatusInfoes/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTblPoOrderStatusInfo([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tblPoOrderStatusInfo = await _context.TblPoOrderStatusInfo.FindAsync(id);

            if (tblPoOrderStatusInfo == null)
            {
                return NotFound();
            }

            return Ok(tblPoOrderStatusInfo);
        }

        // PUT: api/PoOrderStatusInfoes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblPoOrderStatusInfo([FromRoute] int id, [FromBody] TblPoOrderStatusInfo tblPoOrderStatusInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tblPoOrderStatusInfo.Id)
            {
                return BadRequest();
            }

            _context.Entry(tblPoOrderStatusInfo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblPoOrderStatusInfoExists(id))
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

        // POST: api/PoOrderStatusInfoes
        [HttpPost]
        public async Task<IActionResult> PostTblPoOrderStatusInfo([FromBody] TblPoOrderStatusInfo tblPoOrderStatusInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.TblPoOrderStatusInfo.Add(tblPoOrderStatusInfo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTblPoOrderStatusInfo", new { id = tblPoOrderStatusInfo.Id }, tblPoOrderStatusInfo);
        }

        // DELETE: api/PoOrderStatusInfoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTblPoOrderStatusInfo([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tblPoOrderStatusInfo = await _context.TblPoOrderStatusInfo.FindAsync(id);
            if (tblPoOrderStatusInfo == null)
            {
                return NotFound();
            }

            _context.TblPoOrderStatusInfo.Remove(tblPoOrderStatusInfo);
            await _context.SaveChangesAsync();

            return Ok(tblPoOrderStatusInfo);
        }

        private bool TblPoOrderStatusInfoExists(int id)
        {
            return _context.TblPoOrderStatusInfo.Any(e => e.Id == id);
        }
    }
}