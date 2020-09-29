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
    public class FinancialParameterSetupsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public FinancialParameterSetupsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/FinancialParameterSetups
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FinancialParameterSetup>>> GetFinancialParameterSetup()
        {
            return await _context.FinancialParameterSetup.ToListAsync();
        }

        // GET: api/FinancialParameterSetups/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FinancialParameterSetup>> GetFinancialParameterSetup(int id)
        {
            var financialParameterSetup = await _context.FinancialParameterSetup.FindAsync(id);

            if (financialParameterSetup == null)
            {
                return NotFound();
            }

            return financialParameterSetup;
        }

        // PUT: api/FinancialParameterSetups/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFinancialParameterSetup(int id, FinancialParameterSetup financialParameterSetup)
        {
            if (id != financialParameterSetup.Id)
            {
                return BadRequest();
            }

            _context.Entry(financialParameterSetup).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FinancialParameterSetupExists(id))
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

        // POST: api/FinancialParameterSetups
        [HttpPost]
        public async Task<ActionResult<FinancialParameterSetup>> PostFinancialParameterSetup(FinancialParameterSetup financialParameterSetup)
        {
            _context.FinancialParameterSetup.Add(financialParameterSetup);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFinancialParameterSetup", new { id = financialParameterSetup.Id }, financialParameterSetup);
        }

        // DELETE: api/FinancialParameterSetups/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<FinancialParameterSetup>> DeleteFinancialParameterSetup(int id)
        {
            var financialParameterSetup = await _context.FinancialParameterSetup.FindAsync(id);
            if (financialParameterSetup == null)
            {
                return NotFound();
            }

            _context.FinancialParameterSetup.Remove(financialParameterSetup);
            await _context.SaveChangesAsync();

            return financialParameterSetup;
        }

        private bool FinancialParameterSetupExists(int id)
        {
            return _context.FinancialParameterSetup.Any(e => e.Id == id);
        }
    }
}
