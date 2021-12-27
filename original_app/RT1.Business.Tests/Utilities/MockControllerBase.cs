using System.Collections.Generic;

using Microsoft.AspNetCore.Mvc;

using RT1.Model.Dtos.OperationOutcome;

using Xunit;

namespace RT1.Business.Tests.Utilities
{
    /// <summary>
    /// This is a test utility class used for checking OperationStatus and value
    /// where OperationOutcome is used
    ///
    /// Be sure to call OperationOutcome.GetStatusCode(mockController);
    /// BEFORE calling any of the Assertion Methods of this class!
    /// </summary>

    class MockControllerBase : ControllerBase
    {
        private OperationStatus status;
        private object value;

        public void AssertStatusIs(OperationStatus expected)
        {
            Assert.Equal(expected, status);
        }

        public void AssertValueIs<T>(T expected)
            where T : class
        {
            Assert.Equal(expected.GetType(), value.GetType());
            Assert.Equal(expected, value);
        }

        public void AssertValueIs<T>(T expected, IEqualityComparer<T> comparer)
            where T : class
        {
            Assert.Equal(expected.GetType(), value.GetType());
            Assert.True(comparer.Equals(expected, (T)value));
        }

        /////////////////////////////////////////////////////////////
        // The following methods can be ignored                    //
        // they only exist to make this test utility work          //
        // in place of ControllerBase                              //
        /////////////////////////////////////////////////////////////
        public override OkResult Ok()
        {
            status = OperationStatus.Ok;
            return new OkResult();
        }

        public override OkObjectResult Ok(object value)
        {
            status = OperationStatus.Ok;
            this.value = value;
            return new OkObjectResult(this.value);
        }

        public override NotFoundResult NotFound()
        {
            status = OperationStatus.NotFound;
            return new NotFoundResult();
        }

        public override BadRequestResult BadRequest()
        {
            status = OperationStatus.BadRequest;
            return new BadRequestResult();
        }
    }

}
