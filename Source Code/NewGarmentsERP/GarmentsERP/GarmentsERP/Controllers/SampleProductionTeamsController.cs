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
    public class SampleProductionTeamsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public SampleProductionTeamsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/SampleProductionTeams
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SampleProductionTeam>>> GetSampleProductionTeam()
        {
            return await _context.SampleProductionTeam.ToListAsync();
        }

        // GET: api/SampleProductionTeams/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SampleProductionTeam>> GetSampleProductionTeam(int id)
        {
            var sampleProductionTeam = await _context.SampleProductionTeam.FindAsync(id);

            if (sampleProductionTeam == null)
            {
                return NotFound();
            }

            return sampleProductionTeam;
        }

        // PUT: api/SampleProductionTeams/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSampleProductionTeam(int id, SampleProductionTeam sampleProductionTeam)
        {
            if (id != sampleProductionTeam.Id)
            {
                return BadRequest();
            }

            _context.Entry(sampleProductionTeam).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SampleProductionTeamExists(id))
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

        // POST: api/SampleProductionTeams
        [HttpPost]
        public async Task<ActionResult<SampleProductionTeam>> PostSampleProductionTeam(SampleProductionTeam sampleProductionTeam)
        {
            _context.SampleProductionTeam.Add(sampleProductionTeam);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSampleProductionTeam", new { id = sampleProductionTeam.Id }, sampleProductionTeam);
        }

        // DELETE: api/SampleProductionTeams/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<SampleProductionTeam>> DeleteSampleProductionTeam(int id)
        {
            var sampleProductionTeam = await _context.SampleProductionTeam.FindAsync(id);
            if (sampleProductionTeam == null)
            {
                return NotFound();
            }

            _context.SampleProductionTeam.Remove(sampleProductionTeam);
            await _context.SaveChangesAsync();

            return sampleProductionTeam;
        }

        private bool SampleProductionTeamExists(int id)
        {
            return _context.SampleProductionTeam.Any(e => e.Id == id);
        }
    }
}
