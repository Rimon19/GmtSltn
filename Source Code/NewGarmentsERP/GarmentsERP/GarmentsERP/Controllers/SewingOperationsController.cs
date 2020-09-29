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
    public class SewingOperationsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public SewingOperationsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/SewingOperations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SewingOperation>>> GetSewingOperation()
        {
            return await _context.SewingOperation.ToListAsync();
        }

        // GET: api/SewingOperations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SewingOperation>> GetSewingOperation(int id)
        {
            var sewingOperation = await _context.SewingOperation.FindAsync(id);

            if (sewingOperation == null)
            {
                return NotFound();
            }

            return sewingOperation;
        }

        // PUT: api/SewingOperations/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSewingOperation(int id, SewingOperation sewingOperation)
        {
            if (id != sewingOperation.Id)
            {
                return BadRequest();
            }

            _context.Entry(sewingOperation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SewingOperationExists(id))
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

        // POST: api/SewingOperations
        [HttpPost]
        public async Task<ActionResult<SewingOperation>> PostSewingOperation(SewingOperation sewingOperation)
        {
            _context.SewingOperation.Add(sewingOperation);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSewingOperation", new { id = sewingOperation.Id }, sewingOperation);
        }

        // DELETE: api/SewingOperations/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<SewingOperation>> DeleteSewingOperation(int id)
        {
            var sewingOperation = await _context.SewingOperation.FindAsync(id);
            if (sewingOperation == null)
            {
                return NotFound();
            }

            _context.SewingOperation.Remove(sewingOperation);
            await _context.SaveChangesAsync();

            return sewingOperation;
        }

        private bool SewingOperationExists(int id)
        {
            return _context.SewingOperation.Any(e => e.Id == id);
        }
    }
}
