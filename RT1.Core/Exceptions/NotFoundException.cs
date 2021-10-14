using System;
using System.Collections;
using System.Collections.Generic;
using System.Reflection;
using System.Runtime.Serialization;

namespace RT1.Core.Exceptions
{
    [Serializable]
    public sealed class NotFoundException : Exception
    {
        public NotFoundException(string message) : base(message)
        {
        }

        private NotFoundException(SerializationInfo serializationInfo, StreamingContext streamingContext)
            : base(serializationInfo, streamingContext)
        {
        }

        public override bool Equals(object obj)
        {
            return obj is NotFoundException exception &&
                   EqualityComparer<IDictionary>.Default.Equals(Data, exception.Data) &&
                   HelpLink == exception.HelpLink &&
                   HResult == exception.HResult &&
                   EqualityComparer<Exception>.Default.Equals(InnerException, exception.InnerException) &&
                   Message == exception.Message &&
                   Source == exception.Source &&
                   StackTrace == exception.StackTrace &&
                   EqualityComparer<MethodBase>.Default.Equals(TargetSite, exception.TargetSite);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Data, HelpLink, HResult, InnerException, Message, Source, StackTrace, TargetSite);
        }
    }
}
