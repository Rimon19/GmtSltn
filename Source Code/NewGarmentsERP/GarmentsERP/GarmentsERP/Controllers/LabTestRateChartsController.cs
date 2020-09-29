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
    public class LabTestRateChartsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public LabTestRateChartsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/LabTestRateCharts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LabTestRateChart>>> GetLabTestRateChart()
        {
            return await _context.LabTestRateChart.ToListAsync();
        }

        // GET: api/LabTestRateCharts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<LabTestRateChart>> GetLabTestRateChart(int id)
        {
            var labTestRateChart = await _context.LabTestRateChart.FindAsync(id);

            if (labTestRateChart == null)
            {
                return NotFound();
            }

            return labTestRateChart;
        }

        // PUT: api/LabTestRateCharts/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLabTestRateChart(int id, LabTestRateChart labTestRateChart)
        {
            if (id != labTestRateChart.Id)
            {
                return BadRequest();
            }

            _context.Entry(labTestRateChart).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LabTestRateChartExists(id))
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

        // POST: api/LabTestRateCharts
        [HttpPost]
        public async Task<ActionResult<LabTestRateChart>> PostLabTestRateChart(LabTestRateChart labTestRateChart)
        {
            _context.LabTestRateChart.Add(labTestRateChart);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLabTestRateChart", new { id = labTestRateChart.Id }, labTestRateChart);
        }

        // DELETE: api/LabTestRateCharts/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<LabTestRateChart>> DeleteLabTestRateChart(int id)
        {
            var labTestRateChart = await _context.LabTestRateChart.FindAsync(id);
            if (labTestRateChart == null)
            {
                return NotFound();
            }

            _context.LabTestRateChart.Remove(labTestRateChart);
            await _context.SaveChangesAsync();

            return labTestRateChart;
        }

        private bool LabTestRateChartExists(int id)
        {
            return _context.LabTestRateChart.Any(e => e.Id == id);
        }
    }
}
