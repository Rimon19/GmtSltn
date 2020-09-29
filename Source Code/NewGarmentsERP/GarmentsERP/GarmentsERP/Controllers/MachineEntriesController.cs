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
    public class MachineEntriesController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public MachineEntriesController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/MachineEntries
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MachineEntry>>> GetMachineEntry()
        {
            return await _context.MachineEntry.ToListAsync();
        }

        // GET: api/MachineEntries/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MachineEntry>> GetMachineEntry(int id)
        {
            var machineEntry = await _context.MachineEntry.FindAsync(id);

            if (machineEntry == null)
            {
                return NotFound();
            }

            return machineEntry;
        }

        // PUT: api/MachineEntries/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMachineEntry(int id, MachineEntry machineEntry)
        {
            if (id != machineEntry.Id)
            {
                return BadRequest();
            }

            _context.Entry(machineEntry).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MachineEntryExists(id))
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

        // POST: api/MachineEntries
        [HttpPost]
        public async Task<ActionResult<MachineEntry>> PostMachineEntry(MachineEntry machineEntry)
        {
            _context.MachineEntry.Add(machineEntry);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMachineEntry", new { id = machineEntry.Id }, machineEntry);
        }

        // DELETE: api/MachineEntries/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<MachineEntry>> DeleteMachineEntry(int id)
        {
            var machineEntry = await _context.MachineEntry.FindAsync(id);
            if (machineEntry == null)
            {
                return NotFound();
            }

            _context.MachineEntry.Remove(machineEntry);
            await _context.SaveChangesAsync();

            return machineEntry;
        }

        private bool MachineEntryExists(int id)
        {
            return _context.MachineEntry.Any(e => e.Id == id);
        }
    }
}
