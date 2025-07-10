import React, { useState } from 'react';
import {
  CreditCard,
  User,
  Mail,
  IndianRupee,
  CheckCircle,
  AlertCircle,
  Loader2,
} from 'lucide-react';

const Payment = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    amount: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [course, setCourse] = useState({
    name: 'React Mastery Bootcamp',
    price: Math.floor(Math.random() * 901) + 100, // random between 100-1000
  });

  const validate = () => {
    const newErrors = {};
    if (!form.name || form.name.length < 2)
      newErrors.name = 'Enter a valid name (min 2 chars)';
    if (
      !form.email ||
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(form.email)
    )
      newErrors.email = 'Enter a valid email (e.g. user@example.com)';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setMessage('');
    if (!validate()) return;

    setLoading(true);
    const res = await loadRazorpayScript();
    if (!res) {
      setMessage('Failed to load payment gateway.');
      setLoading(false);
      return;
    }

    const options = {
      key: 'rzp_test_c7uJacY14WXM6M',
      amount: course.price * 100,
      currency: 'INR',
      name: course.name,
      description: 'Course Purchase',
      handler: function (response) {
        setMessage(
          'Payment successful! Payment ID: ' + response.razorpay_payment_id
        );
        setLoading(false);
      },
      prefill: {
        name: form.name,
        email: form.email,
      },
      theme: {
        color: '#3b82f6',
      },
      modal: {
        ondismiss: function () {
          setLoading(false);
        },
      },
    };

    setLoading(false);
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const isFormValid =
    form.name &&
    form.email &&
    Object.keys(errors).every((key) => !errors[key]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg relative z-10">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-200 to-blue-400 px-8 py-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-3">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-1">Secure Payment</h1>
            <p className="text-white text-sm">Complete your course enrollment</p>
          </div>

          <div className="px-8 py-6 bg-blue-50 border-b border-blue-100">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-1">{course.name}</h3>
                <p className="text-sm text-blue-600 font-medium">Premium Course</p>
              </div>
              <div className="text-right">
                <div className="flex items-center text-3xl font-bold text-blue-600 mb-1">
                  <IndianRupee className="w-6 h-6" />
                  {course.price.toLocaleString()}
                </div>
                <p className="text-xs text-gray-500">One-time payment</p>
              </div>
            </div>
          </div>

          <form onSubmit={handlePayment} className="px-8 py-6 space-y-6">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 ${
                      errors.name
                        ? 'border-red-300 bg-red-50'
                        : 'border-gray-200 bg-gray-50 hover:bg-white focus:bg-white'
                    }`}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                {errors.name && (
                  <div className="flex items-center mt-2 text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    {errors.name}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 ${
                      errors.email
                        ? 'border-red-300 bg-red-50'
                        : 'border-gray-200 bg-gray-50 hover:bg-white focus:bg-white'
                    }`}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                {errors.email && (
                  <div className="flex items-center mt-2 text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    {errors.email}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Payment Amount
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <IndianRupee className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    name="amount"
                    value={course.price}
                    readOnly
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl bg-gray-100 text-gray-700 cursor-not-allowed font-semibold"
                    placeholder="Enter amount"
                    min="1"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className={`w-full py-4 px-6 rounded-xl font-bold text-lg text-white transition-all duration-300 transform ${
                  loading || !isFormValid
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95'
                }`}
                disabled={loading || !isFormValid}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                    Processing Payment...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <CreditCard className="w-6 h-6 mr-3" />
                    Pay ₹{course.price.toLocaleString()} Now
                  </div>
                )}
              </button>
            </div>

            {message && (
              <div
                className={`flex items-start p-4 rounded-xl border-l-4 ${
                  message.includes('successful')
                    ? 'bg-green-50 border-green-400 text-green-800'
                    : 'bg-red-50 border-red-400 text-red-800'
                }`}
              >
                {message.includes('successful') ? (
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                )}
                <span className="text-sm font-medium leading-relaxed">
                  {message}
                </span>
              </div>
            )}
          </form>

          <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 text-center space-y-2">
            <p className="text-xs text-gray-600 flex items-center justify-center">
              <span className="mr-2">🔒</span>
              Your payment information is secure and encrypted
            </p>
            <p className="text-xs text-black flex items-center justify-center">
              Need help? Contact our support at
              <a href="mailto:support@example.com" className="underline text-blue-700 hover:text-blue-800 ml-1">support@example.com</a>.
            </p>
            <p className="text-xs text-black flex items-center justify-center">
              For payment issues, call our helpline:
              <a href="tel:18001234567" className="underline text-blue-700 hover:text-blue-800 ml-1">1800-123-4567</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;





// import React, { useState } from 'react'

// const Payment = () => {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     amount: '',
//   });
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const [course, setCourse] = useState({
//     name: 'React Mastery Bootcamp',
//     price: 4999,
//   });

//   // 1. Better Form Validation
//   const validate = () => {
//     const newErrors = {};
//     if (!form.name || form.name.length < 2) newErrors.name = 'Enter a valid name (min 2 chars)';
//     if (!form.email || !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-ZaZ]{2,}$/.test(form.email)) newErrors.email = 'Enter a valid email (e.g. user@example.com)';
//     // Remove amount validation since it's now readOnly and always valid
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: undefined });
//   };

//   const loadRazorpayScript = () => {
//     return new Promise((resolve) => {
//       const script = document.createElement('script');
//       script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };

//   const handlePayment = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     if (!validate()) return;
//     setLoading(true);
//     const res = await loadRazorpayScript();
//     if (!res) {
//       setMessage('Failed to load payment gateway.');
//       setLoading(false);
//       return;
//     }
//     const options = {
//       key: 'rzp_test_c7uJacY14WXM6M',
//       amount: course.price * 100, // Use course price
//       currency: 'INR',
//       name: course.name, // Use course name
//       description: 'Course Purchase',
//       handler: function (response) {
//         setMessage('Payment successful! Payment ID: ' + response.razorpay_payment_id);
//         setLoading(false);
//       },
//       prefill: {
//         name: form.name,
//         email: form.email,
//       },
//       theme: {
//         color: '#3399cc',
//       },
//       modal: {
//         ondismiss: function () {
//           setLoading(false);
//         },
//       },
//     };
//     setLoading(false);
//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   // Remove dark mode support
//   const formBg = 'bg-white border-slate-200';
//   const textColor = 'text-slate-700';
//   const inputBg = 'bg-white text-slate-900 border-slate-300';

//   // 5. Disable Button on Invalid Input
//   const isFormValid =
//     form.name &&
//     form.email &&
//     Object.keys(errors).every((key) => !errors[key]);

//   // 6. Responsive Design is already handled by max-w-md and flex classes

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-100">
//       <form onSubmit={handlePayment} className={`${formBg} p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6 border transition-colors`}>
//         <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">Payment Gateway Demo</h2>
//         {/* Course Details */}
//         <div className="mb-4 p-4 rounded-lg bg-blue-50 border border-blue-200 flex flex-col gap-2">
//           <div className="font-semibold text-blue-900">Course: <span className="font-bold">{course.name}</span></div>
//           <div className="text-blue-700">Amount: <span className="font-bold">₹{course.price}</span></div>
//         </div>
//         <div>
//           <label className={`block mb-1 ${textColor}`}>Name</label>
//           <input
//             type="text"
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${inputBg}`}
//             placeholder="Enter your name"
//             required
//           />
//           {errors.name && <div className="text-red-500 text-xs mt-1">{errors.name}</div>}
//         </div>
//         <div>
//           <label className={`block mb-1 ${textColor}`}>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${inputBg}`}
//             placeholder="Enter your email"
//             required
//           />
//           {errors.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}
//         </div>
//         <div>
//           <label className={`block mb-1 ${textColor}`}>Amount (INR)</label>
//           <input
//             type="number"
//             name="amount"
//             value={course.price}
//             readOnly
//             className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${inputBg} bg-gray-100 cursor-not-allowed`}
//             placeholder="Enter amount"
//             min="1"
//             required
//           />
//           {/* No amount error since it's always valid */}
//         </div>
//         <button
//           type="submit"
//           className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition disabled:opacity-60"
//           disabled={loading || !isFormValid}
//         >
//           {loading ? 'Processing...' : 'Pay Now'}
//         </button>
//         {message && <div className="text-center text-sm text-blue-700 mt-2">{message}</div>}
//       </form>
//     </div>
//   );
// }

// export default Payment





// import React, { useState } from 'react';
// import { CreditCard, User, Mail, IndianRupee, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

// const Payment = () => {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     amount: '',
//   });
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const [course, setCourse] = useState({
//     name: 'React Mastery Bootcamp',
//     price: Math.floor(Math.random() * 901) + 100, // random between 100-1000
//   });

//   const validate = () => {
//     const newErrors = {};
//     if (!form.name || form.name.length < 2) newErrors.name = 'Enter a valid name (min 2 chars)';
//     if (!form.email || !/^[A-Za-z0-9._%+-]+@[A-ZaZ0-9.-]+\.[A-ZaZ]{2,}$/.test(form.email)) newErrors.email = 'Enter a valid email (e.g. user@example.com)';
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: undefined });
//   };

//   const loadRazorpayScript = () => {
//     return new Promise((resolve) => {
//       const script = document.createElement('script');
//       script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };

//   const handlePayment = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     if (!validate()) return;
//     setLoading(true);
//     const res = await loadRazorpayScript();
//     if (!res) {
//       setMessage('Failed to load payment gateway.');
//       setLoading(false);
//       return;
//     }
//     const options = {
//       key: 'rzp_test_c7uJacY14WXM6M',
//       amount: course.price * 100,
//       currency: 'INR',
//       name: course.name,
//       description: 'Course Purchase',
//       handler: function (response) {
//         setMessage('Payment successful! Payment ID: ' + response.razorpay_payment_id);
//         setLoading(false);
//       },
//       prefill: {
//         name: form.name,
//         email: form.email,
//       },
//       theme: {
//         color: '#3b82f6',
//       },
//       modal: {
//         ondismiss: function () {
//           setLoading(false);
//         },
//       },
//     };
//     setLoading(false);
//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   const isFormValid =
//     form.name &&
//     form.email &&
//     Object.keys(errors).every((key) => !errors[key]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
//       <div className="w-full max-w-md">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
//             <CreditCard className="w-8 h-8 text-blue-600" />
//           </div>
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Secure Payment</h1>
//           <p className="text-gray-600">Complete your course enrollment</p>
//         </div>

//         {/* Course Card */}
//         <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-6">
//           <div className="flex items-center justify-between">
//             <div>
//               <h3 className="font-semibold text-gray-900 mb-1">{course.name}</h3>
//               <p className="text-sm text-gray-500">Premium Course</p>
//             </div>
//             <div className="text-right">
//               <div className="flex items-center text-2xl font-bold text-blue-600">
//                 <IndianRupee className="w-5 h-5" />
//                 {course.price.toLocaleString()}
//               </div>
//               <p className="text-xs text-gray-500">One-time payment</p>
//             </div>
//           </div>
//         </div>

//         {/* Payment Form */}
//         <form onSubmit={handlePayment} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 space-y-6">
//           <div className="space-y-4">
//             {/* Name Field */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Full Name
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <User className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   type="text"
//                   name="name"
//                   value={form.name}
//                   onChange={handleChange}
//                   className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
//                     errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
//                   }`}
//                   placeholder="Enter your full name"
//                   required
//                 />
//               </div>
//               {errors.name && (
//                 <div className="flex items-center mt-2 text-red-600 text-sm">
//                   <AlertCircle className="w-4 h-4 mr-1" />
//                   {errors.name}
//                 </div>
//               )}
//             </div>

//             {/* Email Field */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Mail className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   type="email"
//                   name="email"
//                   value={form.email}
//                   onChange={handleChange}
//                   className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
//                     errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-white'
//                   }`}
//                   placeholder="Enter your email address"
//                   required
//                 />
//               </div>
//               {errors.email && (
//                 <div className="flex items-center mt-2 text-red-600 text-sm">
//                   <AlertCircle className="w-4 h-4 mr-1" />
//                   {errors.email}
//                 </div>
//               )}
//             </div>

//             {/* Amount Field */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Amount
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <IndianRupee className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   type="number"
//                   name="amount"
//                   value={course.price}
//                   readOnly
//                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-700 cursor-not-allowed"
//                   placeholder="Enter amount"
//                   min="1"
//                   required
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Pay Button */}
//           <button
//             type="submit"
//             className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-200 ${
//               loading || !isFormValid
//                 ? 'bg-gray-400 cursor-not-allowed'
//                 : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
//             }`}
//             disabled={loading || !isFormValid}
//           >
//             {loading ? (
//               <div className="flex items-center justify-center">
//                 <Loader2 className="w-5 h-5 mr-2 animate-spin" />
//                 Processing Payment...
//               </div>
//             ) : (
//               <div className="flex items-center justify-center">
//                 <CreditCard className="w-5 h-5 mr-2" />
//                 Pay ₹{course.price.toLocaleString()} Now
//               </div>
//             )}
//           </button>

//           {/* Success/Error Message */}
//           {message && (
//             <div className={`flex items-center p-4 rounded-xl ${
//               message.includes('successful') 
//                 ? 'bg-green-50 border border-green-200 text-green-700' 
//                 : 'bg-red-50 border border-red-200 text-red-700'
//             }`}>
//               {message.includes('successful') ? (
//                 <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
//               ) : (
//                 <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
//               )}
//               <span className="text-sm font-medium">{message}</span>
//             </div>
//           )}
//         </form>

//         {/* Security Notice */}
//         <div className="mt-6 text-center">
//           <p className="text-xs text-gray-500">
//             🔒 Your payment information is secure and encrypted
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;