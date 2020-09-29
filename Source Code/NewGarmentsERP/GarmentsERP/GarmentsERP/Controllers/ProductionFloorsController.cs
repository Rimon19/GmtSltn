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
    public class ProductionFloorsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public ProductionFloorsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/ProductionFloors
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductionFloor>>> GetProductionFloor()
        {
            return await _context.ProductionFloor.ToListAsync();
        }

        // GET: api/ProductionFloors/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProductionFloor>> GetProductionFloor(int id)
        {
            var productionFloor = await _context.ProductionFloor.FindAsync(id);

            if (productionFloor == null)
            {
                return NotFound();
            }

            return productionFloor;
        }

        // PUT: api/ProductionFloors/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProductionFloor(int id, ProductionFloor productionFloor)
        {
            if (id != productionFloor.Id)
            {
                return BadRequest();
            }

            _context.Entry(productionFloor).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductionFloorExists(id))
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

        // POST: api/ProductionFloors
        [HttpPost]
        public async Task<ActionResult<ProductionFloor>> PostProductionFloor(ProductionFloor productionFloor)
        {
            _context.ProductionFloor.Add(productionFloor);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProductionFloor", new { id = productionFloor.Id }, productionFloor);
        }

        // DELETE: api/ProductionFloors/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ProductionFloor>> DeleteProductionFloor(int id)
        {
            var productionFloor = await _context.ProductionFloor.FindAsync(id);
            if (productionFloor == null)
            {
                return NotFound();
            }

            _context.ProductionFloor.Remove(productionFloor);
            await _context.SaveChangesAsync();

            return productionFloor;
        }

        private bool ProductionFloorExists(int id)
        {
            return _context.ProductionFloor.Any(e => e.Id == id);
        }
    }
}
