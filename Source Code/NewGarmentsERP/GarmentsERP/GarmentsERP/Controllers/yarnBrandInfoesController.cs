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
    public class yarnBrandInfoesController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public yarnBrandInfoesController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/yarnBrandInfoes
        [HttpGet]
        public  IEnumerable<yarnBrandInfo> GetYarnBand()
        {
            return _context.YarnBrand;
        }

        // GET: api/yarnBrandInfoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<yarnBrandInfo>> GetyarnBrandInfo(int id)
        {
            var yarnBrandInfo = await _context.YarnBrand.FindAsync(id);

            if (yarnBrandInfo == null)
            {
                return NotFound();
            }

            return yarnBrandInfo;
        }

        // PUT: api/yarnBrandInfoes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutyarnBrandInfo(int id, yarnBrandInfo yarnBrandInfo)
        {
            if (id != yarnBrandInfo.yarnBrandId)
            {
                return BadRequest();
            }

            _context.Entry(yarnBrandInfo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!yarnBrandInfoExists(id))
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

        // POST: api/yarnBrandInfoes
        [HttpPost]
        public async Task<ActionResult> PostyarnBrandInfo(yarnBrandInfo yarnBrandInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
                {
               _context.YarnBrand.Add(yarnBrandInfo);
                await _context.SaveChangesAsync();
            }
            catch (Exception e)
            {

            }
            

            return CreatedAtAction("GetyarnBrandInfo", new { id = yarnBrandInfo.yarnBrandId }, yarnBrandInfo);
        }

        // DELETE: api/yarnBrandInfoes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<yarnBrandInfo>> DeleteyarnBrandInfo(int id)
        {
            var yarnBrandInfo = await _context.YarnBrand.FindAsync(id);
            if (yarnBrandInfo == null)
            {
                return NotFound();
            }

            _context.YarnBrand.Remove(yarnBrandInfo);
            await _context.SaveChangesAsync();

            return yarnBrandInfo;
        }

        private bool yarnBrandInfoExists(int id)
        {
            return _context.YarnBrand.Any(e => e.yarnBrandId == id);
        }
    }
}
