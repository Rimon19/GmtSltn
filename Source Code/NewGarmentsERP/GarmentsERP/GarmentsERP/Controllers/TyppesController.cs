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
    public class TyppesController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public TyppesController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/Typpes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Typpe>>> GetType()
        {
            return await _context.Type.ToListAsync();
        }

        // GET: api/Typpes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Typpe>> GetTyppe(int id)
        {
            var typpe = await _context.Type.FindAsync(id);

            if (typpe == null)
            {
                return NotFound();
            }

            return typpe;
        }

        // PUT: api/Typpes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTyppe(int id, Typpe typpe)
        {
            if (id != typpe.Id)
            {
                return BadRequest();
            }

            _context.Entry(typpe).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TyppeExists(id))
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

        // POST: api/Typpes
        [HttpPost]
        public async Task<ActionResult<Typpe>> PostTyppe(Typpe typpe)
        {
            _context.Type.Add(typpe);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTyppe", new { id = typpe.Id }, typpe);
        }

        // DELETE: api/Typpes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Typpe>> DeleteTyppe(int id)
        {
            var typpe = await _context.Type.FindAsync(id);
            if (typpe == null)
            {
                return NotFound();
            }

            _context.Type.Remove(typpe);
            await _context.SaveChangesAsync();

            return typpe;
        }

        private bool TyppeExists(int id)
        {
            return _context.Type.Any(e => e.Id == id);
        }
    }
}
