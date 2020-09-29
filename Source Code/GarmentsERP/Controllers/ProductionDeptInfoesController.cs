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
    public class ProductionDeptInfoesController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public ProductionDeptInfoesController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/ProductionDeptInfoes/Index
        [HttpGet("Index")]
        public IEnumerable<TblProductionDeptInfo> GetTblProductionDeptInfo()
        {
            return _context.TblProductionDeptInfo;
        }

        // GET: api/ProductionDeptInfoes/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTblProductionDeptInfo([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tblProductionDeptInfo = await _context.TblProductionDeptInfo.FindAsync(id);

            if (tblProductionDeptInfo == null)
            {
                return NotFound();
            }

            return Ok(tblProductionDeptInfo);
        }

        // PUT: api/ProductionDeptInfoes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblProductionDeptInfo([FromRoute] int id, [FromBody] TblProductionDeptInfo tblProductionDeptInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tblProductionDeptInfo.Id)
            {
                return BadRequest();
            }

            _context.Entry(tblProductionDeptInfo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblProductionDeptInfoExists(id))
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

        // POST: api/ProductionDeptInfoes
        [HttpPost]
        public async Task<IActionResult> PostTblProductionDeptInfo([FromBody] TblProductionDeptInfo tblProductionDeptInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.TblProductionDeptInfo.Add(tblProductionDeptInfo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTblProductionDeptInfo", new { id = tblProductionDeptInfo.Id }, tblProductionDeptInfo);
        }

        // DELETE: api/ProductionDeptInfoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTblProductionDeptInfo([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tblProductionDeptInfo = await _context.TblProductionDeptInfo.FindAsync(id);
            if (tblProductionDeptInfo == null)
            {
                return NotFound();
            }

            _context.TblProductionDeptInfo.Remove(tblProductionDeptInfo);
            await _context.SaveChangesAsync();

            return Ok(tblProductionDeptInfo);
        }

        private bool TblProductionDeptInfoExists(int id)
        {
            return _context.TblProductionDeptInfo.Any(e => e.Id == id);
        }
    }
}