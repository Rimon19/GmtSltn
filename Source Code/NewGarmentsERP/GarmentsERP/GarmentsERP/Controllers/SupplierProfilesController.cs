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
    public class SupplierProfilesController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public SupplierProfilesController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/SupplierProfiles
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SupplierProfile>>> GetSupplierProfile()
        {
            return await _context.SupplierProfile.ToListAsync();
        }

        // GET: api/SupplierProfiles/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SupplierProfile>> GetSupplierProfile(int id)
        {
            var supplierProfile = await _context.SupplierProfile.FindAsync(id);

            if (supplierProfile == null)
            {
                return NotFound();
            }

            return supplierProfile;
        }

        // PUT: api/SupplierProfiles/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSupplierProfile(int id, SupplierProfile supplierProfile)
        {
            if (id != supplierProfile.Id)
            {
                return BadRequest();
            }

            _context.Entry(supplierProfile).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SupplierProfileExists(id))
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

        // POST: api/SupplierProfiles
        [HttpPost]
        public async Task<ActionResult<SupplierProfile>> PostSupplierProfile(SupplierProfile supplierProfile)
        {
            _context.SupplierProfile.Add(supplierProfile);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSupplierProfile", new { id = supplierProfile.Id }, supplierProfile);
        }

        // DELETE: api/SupplierProfiles/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<SupplierProfile>> DeleteSupplierProfile(int id)
        {
            var supplierProfile = await _context.SupplierProfile.FindAsync(id);
            if (supplierProfile == null)
            {
                return NotFound();
            }

            _context.SupplierProfile.Remove(supplierProfile);
            await _context.SaveChangesAsync();

            return supplierProfile;
        }

        private bool SupplierProfileExists(int id)
        {
            return _context.SupplierProfile.Any(e => e.Id == id);
        }
    }
}
