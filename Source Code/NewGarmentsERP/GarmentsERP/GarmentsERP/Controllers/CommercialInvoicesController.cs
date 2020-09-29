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
    public class CommercialInvoicesController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public CommercialInvoicesController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/CommercialInvoices
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CommercialInvoice>>> GetCommercialInvoice()
        {
            return await _context.CommercialInvoice.ToListAsync();
        }

        // GET: api/CommercialInvoices/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CommercialInvoice>> GetCommercialInvoice(int id)
        {
            var commercialInvoice = await _context.CommercialInvoice.FindAsync(id);

            if (commercialInvoice == null)
            {
                return NotFound();
            }

            return commercialInvoice;
        }

        // PUT: api/CommercialInvoices/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCommercialInvoice(int id, CommercialInvoice commercialInvoice)
        {
            if (id != commercialInvoice.Id)
            {
                return BadRequest();
            }

            _context.Entry(commercialInvoice).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CommercialInvoiceExists(id))
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

        // POST: api/CommercialInvoices
        [HttpPost]
        public async Task<ActionResult<CommercialInvoice>> PostCommercialInvoice(CommercialInvoice commercialInvoice)
        {
            _context.CommercialInvoice.Add(commercialInvoice);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCommercialInvoice", new { id = commercialInvoice.Id }, commercialInvoice);
        }

        // DELETE: api/CommercialInvoices/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<CommercialInvoice>> DeleteCommercialInvoice(int id)
        {
            var commercialInvoice = await _context.CommercialInvoice.FindAsync(id);
            if (commercialInvoice == null)
            {
                return NotFound();
            }

            _context.CommercialInvoice.Remove(commercialInvoice);
            await _context.SaveChangesAsync();

            return commercialInvoice;
        }

        private bool CommercialInvoiceExists(int id)
        {
            return _context.CommercialInvoice.Any(e => e.Id == id);
        }
    }
}
