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
    public class FabricCostsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public FabricCostsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/FabricCosts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FabricCost>>> GetFabricCost()
        {
            //GarmentERPContext context;
            //FabricDesPreCostsController fabricDesPreCostsController = new FabricDesPreCostsController(_context);
            //var result=   fabricDesPreCostsController.GetFabricDesPreCost();
            //foreach(var item in _context.FabricCost)
            //{
            //    foreach(var r in )
            //    item.SuplierId=result.
            //}
            return await _context.FabricCost.ToListAsync();
        }

        // GET: api/FabricCosts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FabricCost>> GetFabricCost(int id)
        {
            var fabricCost = await _context.FabricCost.FindAsync(id);

            if (fabricCost == null)
            {
                return NotFound();
            }

            return fabricCost;
        }

        // PUT: api/FabricCosts/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFabricCost(int id, FabricCost fabricCost)
        {
            if (id != fabricCost.Id)
            {
                return BadRequest();
            }

            _context.Entry(fabricCost).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FabricCostExists(id))
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

        // POST: api/FabricCosts
        [HttpPost]
        public async Task<ActionResult<FabricCost>> PostFabricCost(FabricCost fabricCost)
        {
            try {
                _context.FabricCost.Add(fabricCost);
                await _context.SaveChangesAsync();
            }
            catch(Exception e)
            {

            }
            

            return CreatedAtAction("GetFabricCost", new { id = fabricCost.Id }, fabricCost);
        }

        // DELETE: api/FabricCosts/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<FabricCost>> DeleteFabricCost(int id)
        {
            var fabricCost = await _context.FabricCost.FindAsync(id);
            if (fabricCost == null)
            {
                return NotFound();
            }

            _context.FabricCost.Remove(fabricCost);
            await _context.SaveChangesAsync();

            return fabricCost;
        }

        private bool FabricCostExists(int id)
        {
            return _context.FabricCost.Any(e => e.Id == id);
        }
    }
}
