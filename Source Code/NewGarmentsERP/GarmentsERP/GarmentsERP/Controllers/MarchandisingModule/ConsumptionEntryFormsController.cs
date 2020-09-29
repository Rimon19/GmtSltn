using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GarmentsERP.Model;
using GarmentsERP.Model.MarchandisingModule;

namespace GarmentsERP.Controllers.MarchandisingModule
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConsumptionEntryFormsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public ConsumptionEntryFormsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/ConsumptionEntryForms
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ConsumptionEntryForm>>> GetConsumptionEntryForm()
        {
            return await _context.ConsumptionEntryForm.ToListAsync();
        }

        // GET: api/ConsumptionEntryForms/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ConsumptionEntryForm>> GetConsumptionEntryForm(int id)
        {
            var consumptionEntryForm = await _context.ConsumptionEntryForm.FindAsync(id);

            if (consumptionEntryForm == null)
            {
                return NotFound();
            }

            return consumptionEntryForm;
        }

        // PUT: api/ConsumptionEntryForms/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutConsumptionEntryForm(int id, ConsumptionEntryForm consumptionEntryForm)
        {
            if (id != consumptionEntryForm.Id)
            {
                return BadRequest();
            }

            _context.Entry(consumptionEntryForm).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ConsumptionEntryFormExists(id))
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

        // POST: api/ConsumptionEntryForms
        [HttpPost]
        public async Task<ActionResult<ConsumptionEntryForm>> PostConsumptionEntryForm(ConsumptionEntryForm consumptionEntryForm)
        {
            _context.ConsumptionEntryForm.Add(consumptionEntryForm);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetConsumptionEntryForm", new { id = consumptionEntryForm.Id }, consumptionEntryForm);
        }

        // DELETE: api/ConsumptionEntryForms/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ConsumptionEntryForm>> DeleteConsumptionEntryForm(int id)
        {
            var consumptionEntryForm = await _context.ConsumptionEntryForm.FindAsync(id);
            if (consumptionEntryForm == null)
            {
                return NotFound();
            }

            _context.ConsumptionEntryForm.Remove(consumptionEntryForm);
            await _context.SaveChangesAsync();

            return consumptionEntryForm;
        }

        private bool ConsumptionEntryFormExists(int id)
        {
            return _context.ConsumptionEntryForm.Any(e => e.Id == id);
        }
    }
}
