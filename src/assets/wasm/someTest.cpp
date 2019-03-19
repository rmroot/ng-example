#include <cmath>
#include "HeadTool.h"

#include <emscripten.h>

// using namespace emscripten;

double EMSCRIPTEN_KEEPALIVE head_tool_calculate(
	const double specificGravity,
	const double flowRate,
	const double suctionPipeDiameter,
	const double suctionTankGasOverPressure,
	const double suctionTankFluidSurfaceElevation,
	const double suctionLineLossCoefficients,
	const double dischargePipeDiameter,
	const double dischargeGaugePressure,
	const double dischargeGaugeElevation,
	const double dischargeLineLossCoefficients)
{
	auto output = HeadToolSuctionTank(
		specificGravity,
		flowRate,
		suctionPipeDiameter,
		suctionTankGasOverPressure,
		suctionTankFluidSurfaceElevation,
		suctionLineLossCoefficients,
		dischargePipeDiameter,
		dischargeGaugePressure,
		dischargeGaugeElevation,
		dischargeLineLossCoefficients
		).calculate();

	return output["elevationHead"];
}

// EMSCRIPTEN_BINDINGS(my_module) {
//     function("head_tool_calculate", &head_tool_calculate);
// }