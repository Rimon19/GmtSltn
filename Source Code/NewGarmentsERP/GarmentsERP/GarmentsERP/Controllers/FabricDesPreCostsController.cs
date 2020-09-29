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
    public class FabricDesPreCostsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public FabricDesPreCostsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/FabricDesPreCosts
        [HttpGet]
        public  ActionResult<IList<FabricDesPreCost>> GetFabricDesPreCost()
        {
            
            List<FabricDesPreCost> fabricDescriptionList = new List<FabricDesPreCost>();

            var yarnCountDeterminationList= _context.YarnCountDetermination.ToList();
            var yarnCountList = _context.YarnCount.ToList();
            foreach(var y in yarnCountDeterminationList)
            {
                var yarnChildList = _context.YarnCountDeterminationChild.Where(w => w.YarnCountDeterminationMasterId == y.Id).ToList();
              
               
                var compName = "";
                foreach (var item in yarnChildList)
                {
                    var yarnObj = yarnCountList.FirstOrDefault(f => f.Id == item.YarnCountId).Name;
                    compName = compName + item.CompositionName + ' ' + item.Percentage + ' ' + yarnObj+ ' ' + item.Type + ",";
                }

                fabricDescriptionList.Add(new FabricDesPreCost {
                    Id = y.Id,
                    FabNature = y.FabricNature,
                    Construction = y.Construction, GsmWeight =0,
                    ColorRange= y.ColorRange,
                    StichLength= y.StitchLength,
                    ProcessLoss= y.ProcessLoss,
                    Composition= compName,
                    FabricDescriptionDetails= y.Construction+" "+ compName
                });
            }

           

            return  fabricDescriptionList.ToList();
        }

        // GET: api/FabricDesPreCosts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FabricDesPreCost>> GetFabricDesPreCost(int id)
        {
            var fabricDesPreCost = await _context.FabricDesPreCost.FindAsync(id);

            if (fabricDesPreCost == null)
            {
                return NotFound();
            }

            return fabricDesPreCost;
        }

        // PUT: api/FabricDesPreCosts/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFabricDesPreCost(int id, FabricDesPreCost fabricDesPreCost)
        {
            if (id != fabricDesPreCost.Id)
            {
                return BadRequest();
            }

            _context.Entry(fabricDesPreCost).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FabricDesPreCostExists(id))
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

        // POST: api/FabricDesPreCosts
        [HttpPost]
        public async Task<ActionResult<FabricDesPreCost>> PostFabricDesPreCost(FabricDesPreCost fabricDesPreCost)
        {
            try
            {
                _context.FabricDesPreCost.Add(fabricDesPreCost);
                await _context.SaveChangesAsync();

            }
            catch (Exception e)
            {

            }
           
            return CreatedAtAction("GetFabricDesPreCost", new { id = fabricDesPreCost.Id }, fabricDesPreCost);
        }

        // DELETE: api/FabricDesPreCosts/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<FabricDesPreCost>> DeleteFabricDesPreCost(int id)
        {
            var fabricDesPreCost = await _context.FabricDesPreCost.FindAsync(id);
            if (fabricDesPreCost == null)
            {
                return NotFound();
            }

            _context.FabricDesPreCost.Remove(fabricDesPreCost);
            await _context.SaveChangesAsync();

            return fabricDesPreCost;
        }

        private bool FabricDesPreCostExists(int id)
        {
            return _context.FabricDesPreCost.Any(e => e.Id == id);
        }
    }
}
