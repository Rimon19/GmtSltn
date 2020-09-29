﻿using System;
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
    public class GarmentsSampleEntriesController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public GarmentsSampleEntriesController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/GarmentsSampleEntries
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GarmentsSampleEntry>>> GetGarmentsSampleEntry()
        {
            return await _context.GarmentsSampleEntry.ToListAsync();
        }

        // GET: api/GarmentsSampleEntries/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GarmentsSampleEntry>> GetGarmentsSampleEntry(int id)
        {
            var garmentsSampleEntry = await _context.GarmentsSampleEntry.FindAsync(id);

            if (garmentsSampleEntry == null)
            {
                return NotFound();
            }

            return garmentsSampleEntry;
        }

        // PUT: api/GarmentsSampleEntries/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGarmentsSampleEntry(int id, GarmentsSampleEntry garmentsSampleEntry)
        {
            if (id != garmentsSampleEntry.Id)
            {
                return BadRequest();
            }

            _context.Entry(garmentsSampleEntry).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GarmentsSampleEntryExists(id))
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

        // POST: api/GarmentsSampleEntries
        [HttpPost]
        public async Task<ActionResult<GarmentsSampleEntry>> PostGarmentsSampleEntry(GarmentsSampleEntry garmentsSampleEntry)
        {
            _context.GarmentsSampleEntry.Add(garmentsSampleEntry);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGarmentsSampleEntry", new { id = garmentsSampleEntry.Id }, garmentsSampleEntry);
        }

        // DELETE: api/GarmentsSampleEntries/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<GarmentsSampleEntry>> DeleteGarmentsSampleEntry(int id)
        {
            var garmentsSampleEntry = await _context.GarmentsSampleEntry.FindAsync(id);
            if (garmentsSampleEntry == null)
            {
                return NotFound();
            }

            _context.GarmentsSampleEntry.Remove(garmentsSampleEntry);
            await _context.SaveChangesAsync();

            return garmentsSampleEntry;
        }

        private bool GarmentsSampleEntryExists(int id)
        {
            return _context.GarmentsSampleEntry.Any(e => e.Id == id);
        }
    }
}
