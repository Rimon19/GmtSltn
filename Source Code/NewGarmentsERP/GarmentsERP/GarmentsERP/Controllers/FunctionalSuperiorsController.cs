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
    public class FunctionalSuperiorsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public FunctionalSuperiorsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/FunctionalSuperiors
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FunctionalSuperior>>> GetFunctionalSuperior()
        {
            return await _context.FunctionalSuperior.ToListAsync();
        }

        // GET: api/FunctionalSuperiors/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FunctionalSuperior>> GetFunctionalSuperior(int id)
        {
            var functionalSuperior = await _context.FunctionalSuperior.FindAsync(id);

            if (functionalSuperior == null)
            {
                return NotFound();
            }

            return functionalSuperior;
        }

        // PUT: api/FunctionalSuperiors/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFunctionalSuperior(int id, FunctionalSuperior functionalSuperior)
        {
            if (id != functionalSuperior.Id)
            {
                return BadRequest();
            }

            _context.Entry(functionalSuperior).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FunctionalSuperiorExists(id))
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

        // POST: api/FunctionalSuperiors
        [HttpPost]
        public async Task<ActionResult<FunctionalSuperior>> PostFunctionalSuperior(FunctionalSuperior functionalSuperior)
        {
            _context.FunctionalSuperior.Add(functionalSuperior);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFunctionalSuperior", new { id = functionalSuperior.Id }, functionalSuperior);
        }

        // DELETE: api/FunctionalSuperiors/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<FunctionalSuperior>> DeleteFunctionalSuperior(int id)
        {
            var functionalSuperior = await _context.FunctionalSuperior.FindAsync(id);
            if (functionalSuperior == null)
            {
                return NotFound();
            }

            _context.FunctionalSuperior.Remove(functionalSuperior);
            await _context.SaveChangesAsync();

            return functionalSuperior;
        }

        private bool FunctionalSuperiorExists(int id)
        {
            return _context.FunctionalSuperior.Any(e => e.Id == id);
        }
    }
}
