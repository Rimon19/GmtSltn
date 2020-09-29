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
            return _context.tblPODetailsInfro;
            
        }

        // GET: api/MasterPodetailsInfroes/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTblPodetailsInfro([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tblPodetailsInfro =  _context.tblPODetailsInfro.Where(w=>w.InitialOrderID==id);

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

            var inputPanneldetails = _context.InputPannelPodetails.Where(x => x.Po_details_ID == id);

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

            if (id != tblPodetailsInfro.PoDetID)
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
            try
            {
                tblPodetailsInfro.Amount = tblPodetailsInfro.PO_Quantity * tblPodetailsInfro.Avg_Price;
                double exxesscut = Convert.ToDouble(tblPodetailsInfro.Excess_Cut);
                double calculatePlanCut = (Convert.ToDouble(tblPodetailsInfro.PO_Quantity) * exxesscut) / 100;
                tblPodetailsInfro.Plan_Cut = tblPodetailsInfro.PO_Quantity + calculatePlanCut;

                _context.tblPODetailsInfro.Add(tblPodetailsInfro);
                await _context.SaveChangesAsync();
            }
            catch(Exception e)
            {
                 
            }
            

            return CreatedAtAction("GetTblPodetailsInfro", new { id = tblPodetailsInfro.PoDetID }, tblPodetailsInfro);
        } 

        // DELETE: api/MasterPodetailsInfroes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTblPodetailsInfro([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tblPodetailsInfro = await _context.tblPODetailsInfro.FindAsync(id);
            if (tblPodetailsInfro == null)
            {
                return NotFound();
            }

            _context.tblPODetailsInfro.Remove(tblPodetailsInfro);
            await _context.SaveChangesAsync();

            return Ok(tblPodetailsInfro);
        }

        private bool TblPodetailsInfroExists(int id)
        {
            return _context.tblPODetailsInfro.Any(e => e.PoDetID == id);
        }


        [HttpGet("GarmentsColor/{id}")]
        public IActionResult GarmentsColor([FromRoute] int id)

        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var inputPanneldetails = _context.InputPannelPodetails.Where(x => x.Po_details_ID == id);

            if (inputPanneldetails == null)
            {
                return NotFound();
            }

            var sizeWiseBreakDownList = new List<SizePannelPodetails>();
            foreach (var item in inputPanneldetails)
            {
                var sizeList = _context.Size_Pannel_PODetails.Where(w => w.InputPannelId == item.Input_Pannel_ID).ToList();
                foreach (var i in sizeList)
                {
                    sizeWiseBreakDownList.Add(i);
                }

            }

            var query = sizeWiseBreakDownList.GroupBy(p => p.Color)
                .Select(g => new { Color = g.Key });

            return Ok(query);

        }
        [HttpGet("GarmentsSize/{id}")]
        public IActionResult GarmentsSize([FromRoute] int id)

        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var inputPanneldetails = _context.InputPannelPodetails.Where(x => x.Po_details_ID == id);

            if (inputPanneldetails == null)
            {
                return NotFound();
            }

            var sizeWiseBreakDownList = new List<SizePannelPodetails>();
            foreach (var item in inputPanneldetails)
            {
                var sizeList = _context.Size_Pannel_PODetails.Where(w => w.InputPannelId == item.Input_Pannel_ID).ToList();
                foreach (var i in sizeList)
                {
                    sizeWiseBreakDownList.Add(i);
                }

            }

            var query = sizeWiseBreakDownList.GroupBy(p => p.Size)
                .Select(g => new { Size = g.Key });

            return Ok(query);

        }


    }
}