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
    public class MasterPodetailsInfroesController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public MasterPodetailsInfroesController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/MasterPodetailsInfroes
        [HttpGet]
        public IEnumerable<TblPodetailsInfro> GetTblPodetailsInfro()
        {
            return _context.TblPodetailsInfro;
        }

        // GET: api/MasterPodetailsInfroes/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTblPodetailsInfro([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tblPodetailsInfro = await _context.TblPodetailsInfro.FindAsync(id);

            if (tblPodetailsInfro == null)
            {
                return NotFound();
            }

            return Ok(tblPodetailsInfro);
        }


        [HttpGet("Details/{id}")]
        public IActionResult GetInputPannelDetails([FromRoute] int id)

        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var inputPanneldetails = _context.InputPannelPodetails.Where(x => x.PoDetailsId == id);

            if (inputPanneldetails == null)
            {
                return NotFound();
            }
            return Ok(inputPanneldetails);

        }



        // PUT: api/MasterPodetailsInfroes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblPodetailsInfro([FromRoute] int id, [FromBody] TblPodetailsInfro tblPodetailsInfro)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tblPodetailsInfro.PoDetId)
            {
                return BadRequest();
            }

            _context.Entry(tblPodetailsInfro).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblPodetailsInfroExists(id))
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

        // POST: api/MasterPodetailsInfroes
        [HttpPost]
        public async Task<IActionResult> PostTblPodetailsInfro([FromBody] TblPodetailsInfro tblPodetailsInfro)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            tblPodetailsInfro.Amount = tblPodetailsInfro.PoQuantity * tblPodetailsInfro.AvgPrice;
            double exxesscut =Convert.ToDouble(tblPodetailsInfro.ExcessCut);
            double calculatePlanCut = (Convert.ToDouble(tblPodetailsInfro.PoQuantity) * exxesscut) /100;
            tblPodetailsInfro.PlanCut = tblPodetailsInfro.PoQuantity + calculatePlanCut;

            _context.TblPodetailsInfro.Add(tblPodetailsInfro);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTblPodetailsInfro", new { id = tblPodetailsInfro.PoDetId }, tblPodetailsInfro);
        } 

        // DELETE: api/MasterPodetailsInfroes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTblPodetailsInfro([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tblPodetailsInfro = await _context.TblPodetailsInfro.FindAsync(id);
            if (tblPodetailsInfro == null)
            {
                return NotFound();
            }

            _context.TblPodetailsInfro.Remove(tblPodetailsInfro);
            await _context.SaveChangesAsync();

            return Ok(tblPodetailsInfro);
        }

        private bool TblPodetailsInfroExists(int id)
        {
            return _context.TblPodetailsInfro.Any(e => e.PoDetId == id);
        }
    }
}