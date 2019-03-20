#include <emscripten/bind.h>
using namespace emscripten;
int fibonacci(int n)
{
    if (n == 0 || n == 1)
        return n;
    else
        return (fibonacci(n - 1) + fibonacci(n - 2));
}


EMSCRIPTEN_BINDINGS(my_module) {
    function("fibonacci", &fibonacci);
}