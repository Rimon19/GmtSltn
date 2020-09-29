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
    public class SubDeptInfoesController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public SubDeptInfoesController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/SubDeptInfoes/Index
        [HttpGet("Index")]
        public IEnumerable<TblSubDeptInfo> GetTblSubDeptInfo()
        {
            return _context.TblSubDeptInfo;
        }

        // GET: api/SubDeptInfoes/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTblSubDeptInfo([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tblSubDeptInfo = await _context.TblSubDeptInfo.FindAsync(id);

            if (tblSubDeptInfo == null)
            {
                return NotFound();
            }

            return Ok(tblSubDeptInfo);
        }

        // PUT: api/SubDeptInfoes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblSubDeptInfo([FromRoute] int id, [FromBody] TblSubDeptInfo tblSubDeptInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tblSubDeptInfo.SubDeptId)
            {
                return BadRequest();
            }

            _context.Entry(tblSubDeptInfo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblSubDeptInfoExists(id))
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

        // POST: api/SubDeptInfoes
        [HttpPost]
        public async Task<IActionResult> PostTblSubDeptInfo([FromBody] TblSubDeptInfo tblSubDeptInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.TblSubDeptInfo.Add(tblSubDeptInfo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTblSubDeptInfo", new { id = tblSubDeptInfo.SubDeptId }, tblSubDeptInfo);
        }

        // DELETE: api/SubDeptInfoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTblSubDeptInfo([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tblSubDeptInfo = await _context.TblSubDeptInfo.FindAsync(id);
            if (tblSubDeptInfo == null)
            {
                return NotFound();
            }

            _context.TblSubDeptInfo.Remove(tblSubDeptInfo);
            await _context.SaveChangesAsync();

            return Ok(tblSubDeptInfo);
        }

        private bool TblSubDeptInfoExists(int id)
        {
            return _context.TblSubDeptInfo.Any(e => e.SubDeptId == id);
        }
    }
}