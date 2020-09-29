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
    public class ItemAccountCreationsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public ItemAccountCreationsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/ItemAccountCreations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ItemAccountCreation>>> GetItemAccountCreation()
        {
            return await _context.ItemAccountCreation.ToListAsync();
        }

        // GET: api/ItemAccountCreations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ItemAccountCreation>> GetItemAccountCreation(int id)
        {
            var itemAccountCreation = await _context.ItemAccountCreation.FindAsync(id);

            if (itemAccountCreation == null)
            {
                return NotFound();
            }

            return itemAccountCreation;
        }

        // PUT: api/ItemAccountCreations/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutItemAccountCreation(int id, ItemAccountCreation itemAccountCreation)
        {
            if (id != itemAccountCreation.Id)
            {
                return BadRequest();
            }

            _context.Entry(itemAccountCreation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ItemAccountCreationExists(id))
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

        // POST: api/ItemAccountCreations
        [HttpPost]
        public async Task<ActionResult<ItemAccountCreation>> PostItemAccountCreation(ItemAccountCreation itemAccountCreation)
        {
            _context.ItemAccountCreation.Add(itemAccountCreation);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetItemAccountCreation", new { id = itemAccountCreation.Id }, itemAccountCreation);
        }

        // DELETE: api/ItemAccountCreations/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ItemAccountCreation>> DeleteItemAccountCreation(int id)
        {
            var itemAccountCreation = await _context.ItemAccountCreation.FindAsync(id);
            if (itemAccountCreation == null)
            {
                return NotFound();
            }

            _context.ItemAccountCreation.Remove(itemAccountCreation);
            await _context.SaveChangesAsync();

            return itemAccountCreation;
        }

        private bool ItemAccountCreationExists(int id)
        {
            return _context.ItemAccountCreation.Any(e => e.Id == id);
        }
    }
}
