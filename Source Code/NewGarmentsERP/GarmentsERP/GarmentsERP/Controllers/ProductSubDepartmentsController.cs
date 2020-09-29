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
    public class ProductSubDepartmentsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public ProductSubDepartmentsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/ProductSubDepartments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductSubDepartment>>> GetProductSubDepartment()
        {
            return await _context.ProductSubDepartment.ToListAsync();
        }

        // GET: api/ProductSubDepartments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProductSubDepartment>> GetProductSubDepartment(int id)
        {
            var productSubDepartment = await _context.ProductSubDepartment.FindAsync(id);

            if (productSubDepartment == null)
            {
                return NotFound();
            }

            return productSubDepartment;
        }

        // PUT: api/ProductSubDepartments/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProductSubDepartment(int id, ProductSubDepartment productSubDepartment)
        {
            if (id != productSubDepartment.Id)
            {
                return BadRequest();
            }

            _context.Entry(productSubDepartment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductSubDepartmentExists(id))
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

        // POST: api/ProductSubDepartments
        [HttpPost]
        public async Task<ActionResult<ProductSubDepartment>> PostProductSubDepartment(ProductSubDepartment productSubDepartment)
        {
            _context.ProductSubDepartment.Add(productSubDepartment);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProductSubDepartment", new { id = productSubDepartment.Id }, productSubDepartment);
        }

        // DELETE: api/ProductSubDepartments/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ProductSubDepartment>> DeleteProductSubDepartment(int id)
        {
            var productSubDepartment = await _context.ProductSubDepartment.FindAsync(id);
            if (productSubDepartment == null)
            {
                return NotFound();
            }

            _context.ProductSubDepartment.Remove(productSubDepartment);
            await _context.SaveChangesAsync();

            return productSubDepartment;
        }

        private bool ProductSubDepartmentExists(int id)
        {
            return _context.ProductSubDepartment.Any(e => e.Id == id);
        }
    }
}
