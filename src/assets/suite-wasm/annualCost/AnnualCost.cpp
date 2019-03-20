/**
 * @brief Contains the definition of functions of AnnualCost class.
 *      calculate(): Calculates the annual energy cost
 *
 * @author Subhankar Mishra (mishras)
 * @author Gina Accawi (accawigk)
 * @bug No known bugs.
 *
 */

#include "AnnualCost.h"
#include <emscripten/bind.h>
using namespace emscripten;

/**
 * Calculate Annual energy cost.
 * Annual energy cost = MWh/year * 1000 * energy cost rate ($/kWh)
 * 1000 in above equation is not used in excel version of the tool.
 *
 * @return Annual Energy Cost
 */
double AnnualCost::calculate() {
    annualEnergyCost = annualEnergy * kwhRate;
    return annualEnergyCost;
}

EMSCRIPTEN_BINDINGS(annual_cost){
    class_<AnnualCost>("AnnualCost").constructor<double, double>().function("calculate", &AnnualCost::calculate);
}