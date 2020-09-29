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
    public class CompanyInfoesController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public CompanyInfoesController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/CompanyInfoes/Index
        [HttpGet("Index")]
        public IEnumerable<TblCompanyInfo> GetTblCompanyInfo()
        {

           var s= _context.TblInitialOrder.Include(i=>i.PreCosting).ToList();
            return _context.TblCompanyInfo;
        }

        // GET: api/CompanyInfoes/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTblCompanyInfo([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tblCompanyInfo = await _context.TblCompanyInfo.FindAsync(id);

            if (tblCompanyInfo == null)
            {
                return NotFound();
            }

            return Ok(tblCompanyInfo);
        }

        // PUT: api/CompanyInfoes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblCompanyInfo([FromRoute] int id, [FromBody] TblCompanyInfo tblCompanyInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tblCompanyInfo.CompId)
            {
                return BadRequest();
            }

            _context.Entry(tblCompanyInfo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblCompanyInfoExists(id))
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

        // POST: api/CompanyInfoes
        [HttpPost]
        public async Task<IActionResult> PostTblCompanyInfo([FromBody] TblCompanyInfo tblCompanyInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.TblCompanyInfo.Add(tblCompanyInfo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTblCompanyInfo", new { id = tblCompanyInfo.CompId }, tblCompanyInfo);
        }

        // DELETE: api/CompanyInfoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTblCompanyInfo([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tblCompanyInfo = await _context.TblCompanyInfo.FindAsync(id);
            if (tblCompanyInfo == null)
            {
                return NotFound();
            }

            _context.TblCompanyInfo.Remove(tblCompanyInfo);
            await _context.SaveChangesAsync();

            return Ok(tblCompanyInfo);
        }

        private bool TblCompanyInfoExists(int id)
        {
            return _context.TblCompanyInfo.Any(e => e.CompId == id);
        }
    }
}