﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GarmentsERP.Model;

namespace GarmentsERP.Controllers.MarchandisingModule
{
    [Route("api/[controller]")]
    [ApiController]
    public class CostComponenetsMasterDetailsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public CostComponenetsMasterDetailsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/CostComponenetsMasterDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CostComponenetsMasterDetails>>> GetCostComponenetsMasterDetails()
        {
            return await _context.CostComponenetsMasterDetails.ToListAsync();
        }

        // GET: api/CostComponenetsMasterDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CostComponenetsMasterDetails>> GetCostComponenetsMasterDetails(int id)
        {
            var costComponenetsMasterDetails = await _context.CostComponenetsMasterDetails.FindAsync(id);

            if (costComponenetsMasterDetails == null)
            {
                return NotFound();
            }

            return costComponenetsMasterDetails;
        }

        // PUT: api/CostComponenetsMasterDetails/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCostComponenetsMasterDetails(int id, CostComponenetsMasterDetails costComponenetsMasterDetails)
        {
            if (id != costComponenetsMasterDetails.Id)
            {
                return BadRequest();
            }

            _context.Entry(costComponenetsMasterDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CostComponenetsMasterDetailsExists(id))
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

        // POST: api/CostComponenetsMasterDetails
        [HttpPost]
        public async Task<ActionResult<CostComponenetsMasterDetails>> PostCostComponenetsMasterDetails(CostComponenetsMasterDetails costComponenetsMasterDetails)
        {
            try {
                _context.CostComponenetsMasterDetails.Add(costComponenetsMasterDetails);
                await _context.SaveChangesAsync();
            } catch(Exception e)
            {

            }
         

            return CreatedAtAction("GetCostComponenetsMasterDetails", new { id = costComponenetsMasterDetails.Id }, costComponenetsMasterDetails);
        }

        // DELETE: api/CostComponenetsMasterDetails/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<CostComponenetsMasterDetails>> DeleteCostComponenetsMasterDetails(int id)
        {
            var costComponenetsMasterDetails = await _context.CostComponenetsMasterDetails.FindAsync(id);
            if (costComponenetsMasterDetails == null)
            {
                return NotFound();
            }

            _context.CostComponenetsMasterDetails.Remove(costComponenetsMasterDetails);
            await _context.SaveChangesAsync();

            return costComponenetsMasterDetails;
        }

        private bool CostComponenetsMasterDetailsExists(int id)
        {
            return _context.CostComponenetsMasterDetails.Any(e => e.Id == id);
        }
    }
}
