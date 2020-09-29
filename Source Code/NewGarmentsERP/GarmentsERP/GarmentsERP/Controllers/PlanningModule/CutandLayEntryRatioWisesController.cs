using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GarmentsERP.Model;
using GarmentsERP.Model.PlanningModule;

namespace GarmentsERP.Controllers.PlanningModule
{
    [Route("api/[controller]")]
    [ApiController]
    public class CutandLayEntryRatioWisesController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public CutandLayEntryRatioWisesController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/CutandLayEntryRatioWises
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CutandLayEntryRatioWise>>> GetCutandLayEntryRatioWise()
        {
            return await _context.CutandLayEntryRatioWise.ToListAsync();
        }

        // GET: api/CutandLayEntryRatioWises/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CutandLayEntryRatioWise>> GetCutandLayEntryRatioWise(int id)
        {
            var cutandLayEntryRatioWise = await _context.CutandLayEntryRatioWise.FindAsync(id);

            if (cutandLayEntryRatioWise == null)
            {
                return NotFound();
            }

            return cutandLayEntryRatioWise;
        }

        // PUT: api/CutandLayEntryRatioWises/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCutandLayEntryRatioWise(int id, CutandLayEntryRatioWise cutandLayEntryRatioWise)
        {
            if (id != cutandLayEntryRatioWise.Id)
            {
                return BadRequest();
            }

            _context.Entry(cutandLayEntryRatioWise).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CutandLayEntryRatioWiseExists(id))
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

        // POST: api/CutandLayEntryRatioWises
        [HttpPost]
        public async Task<ActionResult<CutandLayEntryRatioWise>> PostCutandLayEntryRatioWise(CutandLayEntryRatioWise cutandLayEntryRatioWise)
        {
            _context.CutandLayEntryRatioWise.Add(cutandLayEntryRatioWise);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCutandLayEntryRatioWise", new { id = cutandLayEntryRatioWise.Id }, cutandLayEntryRatioWise);
        }

        // DELETE: api/CutandLayEntryRatioWises/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<CutandLayEntryRatioWise>> DeleteCutandLayEntryRatioWise(int id)
        {
            var cutandLayEntryRatioWise = await _context.CutandLayEntryRatioWise.FindAsync(id);
            if (cutandLayEntryRatioWise == null)
            {
                return NotFound();
            }

            _context.CutandLayEntryRatioWise.Remove(cutandLayEntryRatioWise);
            await _context.SaveChangesAsync();

            return cutandLayEntryRatioWise;
        }

        private bool CutandLayEntryRatioWiseExists(int id)
        {
            return _context.CutandLayEntryRatioWise.Any(e => e.Id == id);
        }
    }
}
