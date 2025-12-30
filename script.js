// Language System
let currentLanguage = localStorage.getItem('preferredLanguage') || 'en';

const translations = {
    'en': {
        'system_title': 'Airline Booking System',
        'main_title': 'Airline Booking System',
        'main_subtitle': 'welcome to Airline Booking System',
        'passenger_register': 'Passenger Registration',
        'admin_login': 'Admin Login',
        'passenger_login': 'Passenger Login',
        // 'reset_system': '🗑️ Reset System (Clear All Data)', 
        'existing_users': 'Existing Users:',
        'back': '← Back',
        'register': 'Register',
        'login': 'Login',
        'logout': '🚪 Logout',
        'welcome': 'Welcome!',
        'welcome_admin': 'Welcome, Admin!',
        'full_name': 'Full Name',
        'age': 'Age',
        'passport_number': 'Passport Number',
        'password': 'Password',
        'username': 'Username',
        'your_name': 'Your Name',
        'have_account': 'Already have an account?',
        'login_here': 'Login here',
        'no_account': 'Don\'t have an account?',
        'register_here': 'Register here',
        'quick_login': 'Quick Login (Existing Passengers):',
        'quick_login_admin': 'Quick Login (Existing Admins):',
        'passenger_dashboard': 'Passenger Dashboard',
        'book_flight': 'Book Flight',
        'search_flights': 'Search Flights',
        'my_bookings': 'My Bookings',
        'available_flights': 'Available Flights',
        'from': 'From',
        'to': 'To',
        'search': 'Search',
        'admin_dashboard': 'Admin Dashboard',
        'add_flight': 'Add Flight',
        'manage_flights': 'Manage Flights',
        'view_bookings': 'View Bookings',
        'statistics': 'Statistics',
        'add_new_flight': 'Add New Flight',
        'flight_number': 'Flight Number',
        'departure_time': 'Departure Time (HH:MM)',
        'seats_available': 'Seats Available',
        'price': 'Price ($)',
        'all_bookings': 'All Bookings',
        'flight_statistics': 'Flight Statistics',
        'payment_for': 'Payment for',
        'amount': 'Amount: $',
        'card_number': 'Card Number',
        'cvv': 'CVV',
        'expiry_date': 'MM/YY',
        'pay_now': 'Pay Now',
        'cancel': 'Cancel',
        'update_seats': 'Update Seats',
        'new_seats': 'New number of seats',
        'please_login': 'Please login first!',
        'no_seats': 'No seats available on this flight!',
        'flight_not_found': 'Flight not found!',
        'edit_flight': 'Edit Flight',
'delete_flight': 'Delete Flight',
'confirm_delete': 'Confirm Delete',
'update_flight': 'Update Flight',
'flight_updated': 'Flight updated successfully!',
'flight_deleted': 'Flight deleted successfully!',
'about_system': 'About Airline Booking System',
'airline_name': 'ETHIOPIAN AIRLINES',
'airline_tagline': 'THE NEW EXPERIENCE',
'about_system': 'About Airline Booking System',
'about_title': 'About Ethiopian Airlines Booking System',
'about_features': 'System Features',
'feature_registration': 'Easy Registration: Quick passenger registration with secure data storage',
'feature_booking': 'Flight Booking: Browse and book available flights with real-time seat availability',
'feature_seats': 'Seat Selection: Interactive seat map for choosing preferred seats',
'feature_payment': 'Secure Payment: Safe payment processing for flight bookings',
'feature_management': 'Booking Management: View and manage your flight bookings',
'feature_search': 'Flight Search: Search flights by destination and departure city',
'about_user_types': 'User Types',
'user_passengers': 'Passengers',
'user_passenger1': '• Register and create account',
'user_passenger2': '• Book flights and select seats',
'user_passenger3': '• View booking history',
'user_passenger4': '• Search available flights',
'user_admins': 'Administrators',
'user_admin1': '• Add new flights to the system',
'user_admin2': '• Manage flight seat availability',
'user_admin3': '• View all bookings',
'user_admin4': '• Access system statistics',
'about_flight_info': 'Flight Information',
'flight_info_text': 'Our system includes flights to major Ethiopian destinations:',
'about_security': 'Security & Privacy',
'security1': '• All passenger data is securely stored locally',
'security2': '• Passwords are protected',
'security3': '• Secure payment processing',
'security4': '• Data privacy compliance',
'about_multilanguage': 'Multi-language Support',
'multilanguage_text': 'The system supports both English and Amharic languages. Use the language switcher in the top-right corner to change languages.',
'about_getting_started': 'Getting Started',
'start1': '1. New Users: Click "Passenger Registration" to create an account',
'start2': '2. Returning Users: Click "Passenger Login" to access your account',
'start3': '3. Admin Access: Use "Admin Login" for system management',
'start4': '4. Quick Login: Use the "Existing Users" section for quick access',
'close_button': 'Close',
'gender': 'Gender',
'choose_gender': 'Choose your gender',
'gender_male': 'Male',
'gender_female': 'Female',
'gender_other': 'Other',
'age_policies_title': 'Age-Based Policies:',
'age_policy1': '• Under 2: Infants (may travel free/lap infant)',
'age_policy2': '• 2-4: Children (usually need paid seat)',
'age_policy3': '• 5-11: Unaccompanied Minor service may be required',
'age_policy4': '• 12+: Considered adult for ticketing',
'passport_announcement': 'Enter 13-19 digit passport number',
'password_announcement': 'Minimum 8 characters required',
'confirm_password': 'Confirm Password',
'email': 'Email',
'email_placeholder': 'youremail@example.com',
'card_number_help': 'Enter 13-19 digit card number',
'cvv_help': 'Enter 3 or 4 digit CVV',
'expiry_help': 'Format: MM/YY (e.g., 12/25)',
'cancel_booking': 'Cancel Booking',
'delay_booking': 'Delay Booking',
'cancel_booking_title': 'Cancel Booking',
'cancel_booking_text': 'Are you sure you want to cancel this booking?',
'refund_policy': 'Refund Policy:',
'refund_1': '• Cancellation within 24 hours: 90% refund',
'refund_2': '• Cancellation within 48 hours: 75% refund',
'refund_3': '• Cancellation after 48 hours: 50% refund',
'confirm_cancel': 'Yes, Cancel Booking',
'keep_booking': 'No, Keep Booking',
'delay_booking_title': 'Delay Your Booking',
'select_new_flight': 'Select New Flight:',
'choose_flight': 'Choose a flight',
'delay_reason': 'Reason for Delay (Optional):',
'choose_reason': 'Choose a reason',
'reason_personal': 'Personal reasons',
'reason_emergency': 'Emergency',
'reason_schedule': 'Schedule conflict',
'reason_other': 'Other',
'original_price': 'Original Price:',
'new_price': 'New Price:',
'price_difference': 'Price Difference:',
'delay_fee_note': 'Note: A $25 rebooking fee applies for flight changes.',
'confirm_delay': 'Confirm Delay',
'cancel_delay': 'Cancel',
'all_bookings': 'All Bookings',
    'confirmed_bookings': 'Confirmed Bookings',
    'cancelled_bookings': 'Cancelled Bookings',
    'delayed_bookings': 'Delayed Bookings',
    'cancellation_details': 'Cancellation Details',
    'delay_details': 'Delay Details',
    'cancellation_date': 'Cancellation Date',
    'delay_date': 'Delay Date',
    'rebooking_fee': 'Rebooking Fee',
    'booking_status_breakdown': 'Booking Status Breakdown',
    'recent_status_changes': 'Recent Status Changes',
    'no_recent_changes': 'No recent status changes.'
    },
    'am': {
        'system_title': 'የአየር መንገድ ቦታ ማሰሺያ ስርዓት',
        'main_title': ' የአየር መንገድ ቦታ ማሰሺያ ስርዓት',
        'main_subtitle': 'ወደ አየር መንገድ የቦታ ማስያዣ ስርዓት እንኳን በደህና መጡ',
        'passenger_register': 'ተሳፋሪ ምዝገባ',
        'admin_login': 'አስተዳዳሪ መግቢያ',
        'passenger_login': 'ተሳፋሪ መግቢያ',
        'existing_users': 'ነባር ተጠቃሚዎች:',
        'back': '← ተመለስ',
        'register': 'ይመዝገቡ',
        'login': 'ግባ',
        'logout': '🚪 ውጣ',
        'welcome': 'እንኳን ደህና መጡ!',
        'welcome_admin': 'እንኳን ደህና መጡ አስተዳዳሪ!',
        'full_name': 'ሙሉ ስም',
        'age': 'ዕድሜ',
        'passport_number': 'ፓስፖርት ቁጥር',
        'password': 'የይለፍ ቃል',
        'username': 'የተጠቃሚ ስም',
        'your_name': 'ስምዎ',
        'have_account': 'ቀድሞውኑ መለያ አለዎት?',
        'login_here': 'እዚህ ግቡ',
        'no_account': 'መለያ የሎትም?',
        'register_here': 'እዚህ ይመዝገቡ',
        'quick_login': 'ፈጣን መግቢያ (ነባር ተሳፋሪዎች):',
        'quick_login_admin': 'ፈጣን መግቢያ (ነባር አስተዳዳሪዎች):',
        'passenger_dashboard': 'የተሳፋሪ ዳሽቦርድ',
        'book_flight': 'በረራ ይቅረቡ',
        'search_flights': 'በረራዎችን ፈልግ',
        'my_bookings': 'የኔ ቅጠሜዎች',
        'available_flights': 'ሊገኙ የሚችሉ በረራዎች',
        'from': 'ከ',
        'to': 'ወደ',
        'search': 'ፈልግ',
        'admin_dashboard': 'የአስተዳዳሪ ዳሽቦርድ',
        'add_flight': 'በረራ ጨምር',
        'manage_flights': 'በረራዎችን አስተዳድር',
        'view_bookings': 'ቅጠሜዎችን ተመልከት',
        'statistics': 'ስታቲስቲክስ',
        'add_new_flight': 'አዲስ በረራ ጨምር',
        'flight_number': 'የበረራ ቁጥር',
        'departure_time': 'የመነሻ ሰዓት (ሰ:ደቂቃ)',
        'seats_available': 'ሊገኙ የሚችሉ መቀመጫዎች',
        'price': 'ዋጋ ($)',
        'all_bookings': 'ሁሉም ቅጠሜዎች',
        'flight_statistics': 'የበረራ ስታቲስቲክስ',
        'payment_for': 'ክፍያ ለ',
        'amount': 'መጠን: $',
        'card_number': 'የካርድ ቁጥር',
        'cvv': 'ሲቪቪ',
        'expiry_date': 'ወር/ዓመት',
        'pay_now': 'አሁን ይክለሉ',
        'cancel': 'ሰርዝ',
        'update_seats': 'መቀመጫዎችን አዘምን',
        'new_seats': 'አዲስ የመቀመጫ ቁጥር',
        'please_login': 'እባክዎ መጀመሪያ ይግቡ!',
        'no_seats': 'በዚህ በረራ ላይ ምንም ቦታዎች አይገኙም!',
        'flight_not_found': 'በረራ አልተገኘም!',
        'edit_flight': 'በረራ አርትዕ',
'delete_flight': 'በረራ አጥፋ',
'confirm_delete': 'ማጥፋት ያረጋግጡ',
'update_flight': 'በረራ አዘምን',
'flight_updated': 'በረራ በተሳካ ሁኔታ ተዘምኗል!',
'flight_deleted': 'በረራ በተሳካ ሁኔታ ተጥፏል!',
'about_system': 'ስለ አየር መንገድ የቦታ ማስያዣ ስርዓት',
'airline_name': 'ኢትዮጵያ አየር መንገድ',
 'airline_tagline': 'አዲሱ ልምድ',
 'about_system': 'ስለ አየር መንገድ የቦታ ማስያዣ ስርዓት',
 'about_title': 'ስለ ኢትዮጵያ አየር መንገድ የቦታ ማስያዣ ስርዓት',
'about_features': 'የስርዓቱ ባህሪያት',
'feature_registration': 'ቀላል ምዝገባ: ፈጣን ተሳፋሪ ምዝገባ ከደህንነት የተጠበቀ ውሂብ ማከማቻ',
'feature_booking': 'የበረራ ቦታ ማስያዣ: በሚገኙ በረራዎች ላይ ቦታ ያስያዙ ከትክክለኛ ጊዜ መቀመጫ አቅርቦት ጋር',
'feature_seats': 'መቀመጫ ምርጫ: ለተፈለገው መቀመጫ የሚያስችል በይነመረብ መቀመጫ ካርታ',
'feature_payment': 'ደህንነቱ የተጠበቀ ክፍያ: ለበረራ ቦታ ማስያዣዎች ደህንነቱ የተጠበቀ የክፍያ ሂደት',
'feature_management': 'የቦታ ማስያዣ አስተዳደር: የበረራ ቦታ ማስያዣዎችዎን ይመልከቱ እና ያስተዳድሩ',
'feature_search': 'የበረራ ፍለጋ: በመድረሻ እና በመነሻ ከተማ በረራዎችን ፈልግ',
'about_user_types': 'የተጠቃሚ ዓይነቶች',
'user_passengers': 'ተሳፋሪዎች',
'user_passenger1': '• መለያ ይፍጠሩ እና አካውንት ይፍጠሩ',
'user_passenger2': '• በረራ ያስያዙ እና መቀመጫ ይምረጡ',
'user_passenger3': '• የቦታ ማስያዣ ታሪክዎን ይመልከቱ',
'user_passenger4': '• በሚገኙ በረራዎች ላይ ፈልግ',
'user_admins': 'አስተዳዳሪዎች',
'user_admin1': '• አዲስ በረራዎችን ወደ ስርዓቱ ያክሉ',
'user_admin2': '• የበረራ መቀመጫ አቅርቦትን ያስተዳድሩ',
'user_admin3': '• ሁሉንም ቦታ ማስያዣዎች ይመልከቱ',
'user_admin4': '• የስርዓት ስታቲስቲክስ ይድረሱ',
'about_flight_info': 'የበረራ መረጃ',
'flight_info_text': 'ስርዓታችን ዋና ዋና የኢትዮጵያ መድረሻዎችን ያጠቃልላል:',
'about_security': 'ደህንነት እና ግላዊነት',
'security1': '• ሁሉም የተሳፋሪ ውሂብ በደህንነት በአካባቢው ተከማችቷል',
'security2': '• የይለፍ ቃላት ተጠብቀዋል',
'security3': '• ደህንነቱ የተጠበቀ የክፍያ ሂደት',
'security4': '• የውሂብ ግላዊነት ተግዳሮት',
'about_multilanguage': 'ብዙ ቋንቋ ድጋፍ',
'multilanguage_text': 'ስርዓቱ ሁለቱንም እንግሊዝኛ እና አማርኛ ቋንቋዎች ይደግፋል። ቋንቋዎችን ለመቀየር በላይኛው ቀኝ ጥግ ላይ ያለውን የቋንቋ መቀያየሪያ ይጠቀሙ።',
'about_getting_started': 'መጀመሪያ',
'start1': '1. አዲስ ተጠቃሚዎች: መለያ ለመፍጠር "ተሳፋሪ ምዝገባ" ይጫኑ',
'start2': '2. ተመላሽ ተጠቃሚዎች: ለመግባት "ተሳፋሪ መግቢያ" ይጫኑ',
'start3': '3. የአስተዳዳሪ መዳረሻ: ለስርዓት አስተዳደር "አስተዳዳሪ መግቢያ" ይጠቀሙ',
'start4': '4. ፈጣን መግቢያ: ለፈጣን መዳረሻ "ነባር ተጠቃሚዎች" ክፍልን ይጠቀሙ',
'close_button': 'መዝጋት',
'gender': 'ጾታ',
'choose_gender': 'ጾታዎን ይምረጡ',
'gender_male': 'ወንድ',
'gender_female': 'ሴት',
'gender_other': 'ሌላ',
'age_policies_title': 'በዕድሜ ላይ የተመሰረቱ ፖሊሲዎች:',
'age_policy1': '• ከ2 ዓመት በታች: ሕፃናት (በነጻ/በእጅ ሊጓዙ ይችላሉ)',
'age_policy2': '• 2-4: ልጆች (በመደበኛነት የሚከፈል መቀመጫ ያስፈልጋቸዋል)',
'age_policy3': '• 5-11: ያለ አስተዳዳሪ የሚጓዙ ልጆች አገልግሎት ሊፈለግ ይችላል',
'age_policy4': '• 12 እና ከዛ በላይ: ለቲኬት እንደ ሰው ሆነው ይቆጠራሉ',
'passport_announcement': '13-19 አሃዝ ያለው ፓስፖርት ቁጥር ያስገቡ',
'password_announcement': 'ቢያንስ 8 ቁምፊዎች ያስፈልጋሉ',
'confirm_password': 'የይለፍ ቃል አረጋግጥ',
'email': 'ኢሜል',
'email_placeholder': 'ኢሜልህ@ምሳሌ.com',
'card_number_help': '13-19 አሃዝ ያለው ካርድ ቁጥር ያስገቡ',
'cvv_help': '3 ወይም 4 አሃዝ ሲቪቪ ያስገቡ',
'expiry_help': 'ቅርጸት: ወር/ዓመት (ለምሳሌ: 12/25)',
'cancel_booking': 'ቦታ ማስያዣ ሰርዝ',
'delay_booking': 'ቦታ ማስያዣ አረፍ',
'cancel_booking_title': 'ቦታ ማስያዣ ማጥፋት',
'cancel_booking_text': 'ይህን ቦታ ማስያዣ ማጥፋት እርግጠኛ ነዎት?',
'refund_policy': 'የገንዘብ መመለሻ ፖሊሲ:',
'refund_1': '• በ24 ሰዓታት ውስጥ ማጥፋት: 90% መመለሻ',
'refund_2': '• በ48 ሰዓታት ውስጥ ማጥፋት: 75% መመለሻ',
'refund_3': '• ከ48 ሰዓታት በኋላ ማጥፋት: 50% መመለሻ',
'confirm_cancel': 'አዎ፣ ቦታ ማስያዣ ሰርዝ',
'keep_booking': 'አይ፣ ቦታ ማስያዣውን አስቀምጥ',
'delay_booking_title': 'ቦታ ማስያዣዎን አረፍ',
'select_new_flight': 'አዲስ በረራ ይምረጡ:',
'choose_flight': 'በረራ ይምረጡ',
'delay_reason': 'ለማረፍያ ምክንያት (አማራጭ):',
'choose_reason': 'ምክንያት ይምረጡ',
'reason_personal': 'የግል ምክንያቶች',
'reason_emergency': 'አደጋ',
'reason_schedule': 'የጊዜ ሰሌዳ ግጭት',
'reason_other': 'ሌላ',
'original_price': 'የመጀመሪያ ዋጋ:',
'new_price': 'አዲስ ዋጋ:',
'price_difference': 'የዋጋ ልዩነት:',
'delay_fee_note': 'ማስታወሻ: ለበረራ ለውጥ $25 የመልሶ ቦታ ማስያዣ ክፍያ ይተገበራል.',
'confirm_delay': 'ማረፍያ አረጋግጥ',
'cancel_delay': 'ሰርዝ',
'all_bookings': 'ሁሉም ቅጠሜዎች',
    'confirmed_bookings': 'የተያዙ ቅጠሜዎች',
    'cancelled_bookings': 'የተሰሩ ቅጠሜዎች',
    'delayed_bookings': 'የተዘገዩ ቅጠሜዎች',
    'cancellation_details': 'የማስወገጃ ዝርዝሮች',
    'delay_details': 'የማዘግያ ዝርዝሮች',
    'cancellation_date': 'የማስወገጃ ቀን',
    'delay_date': 'የማዘግያ ቀን',
    'rebooking_fee': 'የቦታ መልሶ ማስያዣ ክፍያ',
    'booking_status_breakdown': 'የቅጠሜ ሁኔታ መበስበስ',
    'recent_status_changes': 'የቅርብ ጊዜ ሁኔታ ለውጦች',
    'no_recent_changes': 'ምንም የቅርብ ጊዜ ሁኔታ ለውጦች የሉም.'
    }
};

function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    updateLanguage();
    updateLanguageButtons();
}

function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            const translated = translations[currentLanguage][key];
            // If element has child elements (like a span placeholder), don't overwrite them.
            if (element.children && element.children.length > 0) {
                // Find the first text node and replace its value, or insert one if missing
                const textNode = Array.from(element.childNodes).find(n => n.nodeType === Node.TEXT_NODE);
                if (textNode) {
                    textNode.nodeValue = translated + ' ';
                } else {
                    element.insertBefore(document.createTextNode(translated + ' '), element.firstChild);
                }
                        } else {
                // Check if translation contains HTML tags
                if (translated.includes('<strong>') || translated.includes('<br>') || translated.includes('<')) {
                    element.innerHTML = translated;
                } else {
                    element.textContent = translated;
                }
            }
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[currentLanguage][key]) {
            element.placeholder = translations[currentLanguage][key];
        }
    });

    document.title = translations[currentLanguage]['system_title'] || 'Airline Booking System';
    document.body.className = currentLanguage === 'am' ? 'amharic' : '';
}

function updateLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.textContent.includes(currentLanguage === 'am' ? 'አማርኛ' : 'English')) {
            btn.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    updateLanguage();
    updateLanguageButtons();
    initializeData();
    
   window.addEventListener('click', function(event) {
    const paymentModal = document.getElementById('payment-modal');
    const seatsModal = document.getElementById('manage-seats-modal');
    const seatSelectModal = document.getElementById('seat-modal');
    const aboutModal = document.getElementById('about-system-modal');
    const paymentMethodModal = document.getElementById('payment-method-modal');
    
    if (event.target === paymentModal) {
        closeModal();
    }
    if (event.target === seatsModal) {
        closeSeatsModal();
    }
    if (event.target === seatSelectModal) {
        closeSeatModal();
    }
    if (event.target === aboutModal) {
        closeAboutModal();
    }
    if (event.target === paymentMethodModal) {
        closePaymentMethodModal();
    }
});

    // Hook new Continue button in the Ethiopian-style modal and cancel fallback
    const continueBtn = document.getElementById('ethiopian-seat-modal-continue');
    if (continueBtn) continueBtn.addEventListener('click', confirmSeatSelection);
    const cancelSeatBtn = document.getElementById('cancel-seat-btn');
    if (cancelSeatBtn) cancelSeatBtn.addEventListener('click', closeSeatModal);

    // Delegate clicks for any Book buttons (works for static and dynamic buttons)
    document.body.addEventListener('click', function(e) {
        const btn = e.target.closest && e.target.closest('.book-btn');
        if (!btn) return;
        e.preventDefault();

        // Try data attribute first
        let flightId = btn.dataset && btn.dataset.flightNumber;

        // Fallback: parse from inline onclick attribute if present
        if (!flightId) {
            const onclick = btn.getAttribute && btn.getAttribute('onclick');
            if (onclick) {
                const m = onclick.match(/bookFlight\(['"]([^'"]+)['"]\)/);
                if (m) flightId = m[1];
            }
        }

        if (flightId && window.bookFlight) {
            window.bookFlight(flightId);
        }
    });
});

let passengers = JSON.parse(localStorage.getItem('passengers')) || [];
let admins = JSON.parse(localStorage.getItem('admins')) || [];
let flights = JSON.parse(localStorage.getItem('flights')) || [];
let bookings = JSON.parse(localStorage.getItem('bookings')) || [];

let currentUser = null;
let currentAdmin = null;
let selectedFlight = null;
let flightToManage = null;
let selectedSeat = null;
let selectedPaymentMethod = null;
let paymentDetails = {};
// Seat maps stored in localStorage under key 'seatmaps' as { flightNumber: [occupiedSeatIds...] }
function _readSeatMaps() {
    return JSON.parse(localStorage.getItem('seatmaps') || '{}');
}
function _writeSeatMaps(obj) {
    localStorage.setItem('seatmaps', JSON.stringify(obj));
}

function generateSeatIds(rows = 20, cols = 6) {
    const letters = 'ABCDEF';
    const seats = [];
    for (let r = 1; r <= rows; r++) {
        for (let c = 0; c < cols; c++) {
            seats.push(`${r}${letters[c]}`);
        }
    }
    return seats;
}

function getOccupiedSeats(flightNumber) {
    const maps = _readSeatMaps();
    return maps[flightNumber] || [];
}

function markSeatOccupied(flightNumber, seatId) {
    const maps = _readSeatMaps();
    if (!maps[flightNumber]) maps[flightNumber] = [];
    if (!maps[flightNumber].includes(seatId)) {
        maps[flightNumber].push(seatId);
        _writeSeatMaps(maps);
    }
}

function renderSeatMap(flightNumber) {
    // target the new modal container
    const seatMapEl = document.getElementById('ethiopian-seat-map');
    if (!seatMapEl) return;
    seatMapEl.innerHTML = '';

    // define rows and columns similar to the reference (11-34, columns A B C J K L)
    const rowStart = 11;
    const rowEnd = 34;
    const cols = ['A','B','C','J','K','L'];
    const occupied = getOccupiedSeats(flightNumber);

    for (let r = rowStart; r <= rowEnd; r++) {
        for (let c = 0; c < cols.length; c++) {
            const seatId = `${r}${cols[c]}`;
            const el = document.createElement('div');
            el.className = 'ethiopian-seat-modal-seat available';
            el.setAttribute('role', 'button');
            el.setAttribute('tabindex', '0');
            el.dataset.seatId = seatId;
            el.textContent = seatId;
            if (occupied.includes(seatId)) {
                el.classList.remove('available');
                el.classList.add('reserved');
                el.setAttribute('aria-disabled', 'true');
            }
            el.addEventListener('click', function() {
                if (el.classList.contains('reserved')) return;
                const prev = seatMapEl.querySelector('.ethiopian-seat-modal-seat.selected');
                if (prev) prev.classList.remove('selected');
                el.classList.add('selected');
                selectedSeat = seatId;
            });
            el.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    el.click();
                }
            });
            seatMapEl.appendChild(el);
        }
    }
}

function showSeatModal(flightNumber) {
    selectedSeat = null;
    const seatModal = document.getElementById('seat-modal');
    const seatFlight = document.getElementById('seat-flight');
    const seatPassenger = document.getElementById('seat-passenger-name');
    if (seatFlight) seatFlight.textContent = flightNumber;
    if (seatPassenger && currentUser) seatPassenger.textContent = currentUser.name;
    renderSeatMap(flightNumber);
    if (seatModal) {
        seatModal.style.display = 'block';
        seatModal.setAttribute('aria-hidden', 'false');
    }
}

function closeSeatModal() {
    const seatModal = document.getElementById('seat-modal');
    if (seatModal) {
        seatModal.style.display = 'none';
        seatModal.setAttribute('aria-hidden', 'true');
    }
    selectedSeat = null;
}

function confirmSeatSelection() {
    if (!selectedSeat) {
        alert('Please select a seat before continuing to payment.');
        return;
    }
    
    const preservedSeat = selectedSeat;
    closeSeatModal();
    selectedSeat = preservedSeat;
    
    // Show payment method selection instead of direct payment
    showPaymentMethodModal();
}

// ============ PAYMENT METHOD FUNCTIONS ============

// Show payment method selection modal
function showPaymentMethodModal() {
    const methodModal = document.getElementById('payment-method-modal');
    const methodFlightEl = document.getElementById('method-flight-info');
    const methodAmountEl = document.getElementById('method-payment-amount');
    
    if (!selectedFlight || !currentUser) return;
    
    // Update modal with flight info
    if (methodFlightEl) {
        methodFlightEl.textContent = `${selectedFlight.source} → ${selectedFlight.destination} (Seat: ${selectedSeat})`;
    }
    if (methodAmountEl) {
        methodAmountEl.textContent = selectedFlight.price;
    }
    
    // Reset selection
    selectedPaymentMethod = null;
    document.querySelectorAll('.payment-method-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Show modal
    if (methodModal) {
        methodModal.style.display = 'block';
    }
}

// Select a payment method
function selectPaymentMethod(method) {
    selectedPaymentMethod = method;
    
    // Update UI
    document.querySelectorAll('.payment-method-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Add selected class to clicked card
    const clickedCard = document.querySelector(`[onclick="selectPaymentMethod('${method}')"]`);
    if (clickedCard) {
        clickedCard.classList.add('selected');
    }
}

// Close payment method modal
function closePaymentMethodModal() {
    const methodModal = document.getElementById('payment-method-modal');
    if (methodModal) {
        methodModal.style.display = 'none';
    }
    selectedPaymentMethod = null;
}

// Proceed to payment based on selected method
function proceedToPayment() {
    if (!selectedPaymentMethod) {
        showMessage('payment-message', 'Please select a payment method!', 'error');
        return;
    }
    
    closePaymentMethodModal();
    
    // Handle different payment methods
    switch(selectedPaymentMethod) {
        case 'visa':
            showVisaPaymentForm();
            break;
        case 'paypal':
            showPayPalPaymentForm();
            break;
        case 'bank':
            showBankTransferForm();
            break;
        case 'mobile':
            showMobileMoneyForm();
            break;
        default:
            showVisaPaymentForm();
    }
}

// Show Visa/MasterCard payment form (existing payment modal)
function showVisaPaymentForm() {
    const paymentModal = document.getElementById('payment-modal');
    const paymentFlightEl = document.getElementById('payment-flight');
    const paymentAmountEl = document.getElementById('payment-amount');
    
    if (paymentFlightEl && paymentAmountEl) {
        paymentFlightEl.textContent = `${selectedFlight.source} → ${selectedFlight.destination} (Seat: ${selectedSeat})`;
        paymentAmountEl.textContent = selectedFlight.price;
    }
    
    // Clear form
    const cardNumberEl = document.getElementById('card-number');
    const cardCvvEl = document.getElementById('card-cvv');
    const cardExpiryEl = document.getElementById('card-expiry');
    const paymentMessageEl = document.getElementById('payment-message');
    
    if (cardNumberEl) cardNumberEl.value = '';
    if (cardCvvEl) cardCvvEl.value = '';
    if (cardExpiryEl) cardExpiryEl.value = '';
    if (paymentMessageEl) paymentMessageEl.innerHTML = '';
    
    // Show modal
    if (paymentModal) {
        paymentModal.style.display = 'block';
    }
}

// Show PayPal payment form
function showPayPalPaymentForm() {
    // Create PayPal form modal
    const paypalModal = document.createElement('div');
    paypalModal.id = 'paypal-modal';
    paypalModal.className = 'modal';
    paypalModal.innerHTML = `
        <div class="payment-modal-content">
            <div class="payment-modal-header">
                <h3>Pay with PayPal</h3>
            </div>
            <div class="payment-modal-amount">
                <p>Amount: $${selectedFlight.price}</p>
            </div>
            <div class="paypal-form">
                <p>You will be redirected to PayPal to complete your payment.</p>
                <div class="form-group">
                    <input type="email" id="paypal-email" class="paypal-email-input" placeholder="Enter your PayPal email" required>
                </div>
                <div class="payment-modal-actions">
                    <button class="btn btn-success" onclick="processPayPalPayment()">Pay with PayPal</button>
                    <button class="btn btn-back" onclick="closeModalById('paypal-modal')">Cancel</button>
                </div>
            </div>
            <div id="paypal-message" class="message"></div>
        </div>
    `;
    
    document.body.appendChild(paypalModal);
    paypalModal.style.display = 'block';
}

// Show Bank Transfer form
function showBankTransferForm() {
    const bankModal = document.createElement('div');
    bankModal.id = 'bank-modal';
    bankModal.className = 'modal';
    bankModal.innerHTML = `
        <div class="payment-modal-content">
            <div class="payment-modal-header">
                <h3>Bank Transfer Payment</h3>
            </div>
            <div class="payment-modal-amount">
                <p>Amount: $${selectedFlight.price}</p>
            </div>
            <div class="bank-transfer-form">
                <div class="bank-details">
                    <h4>Bank Account Details</h4>
                    <p><strong>Bank:</strong> Commercial Bank of Ethiopia</p>
                    <p><strong>Account Name:</strong> Ethiopian Airlines Booking System</p>
                    <p><strong>Account Number:</strong> 1000234567890</p>
                    <p><strong>Swift Code:</strong> CBETETAA</p>
                    <p><strong>Reference:</strong> FLIGHT-${selectedFlight.flightNumber}-${currentUser.username}</p>
                </div>
                <p>Please transfer the exact amount and use the reference number above. Your booking will be confirmed once payment is received.</p>
                <div class="payment-modal-actions">
                    <button class="btn btn-success" onclick="confirmBankTransfer()">I Have Transferred</button>
                    <button class="btn btn-back" onclick="closeModalById('bank-modal')">Cancel</button>
                </div>
            </div>
            <div id="bank-message" class="message"></div>
        </div>
    `;
    
    document.body.appendChild(bankModal);
    bankModal.style.display = 'block';
}

// Show Mobile Money form
function showMobileMoneyForm() {
    const mobileModal = document.createElement('div');
    mobileModal.id = 'mobile-modal';
    mobileModal.className = 'modal';
    mobileModal.innerHTML = `
        <div class="payment-modal-content">
            <div class="payment-modal-header">
                <h3>Mobile Money Payment</h3>
            </div>
            <div class="payment-modal-amount">
                <p>Amount: $${selectedFlight.price}</p>
            </div>
            <div class="mobile-money-form">
                <p>Select your mobile money provider:</p>
                <div class="mobile-provider-select">
                    <div class="mobile-provider" onclick="selectMobileProvider('mpesa')">
                        <div class="mobile-provider-icon">📱</div>
                        <div>M-Pesa</div>
                    </div>
                    <div class="mobile-provider" onclick="selectMobileProvider('cbe')">
                        <div class="mobile-provider-icon">🏦</div>
                        <div>CBE Birr</div>
                    </div>
                    <div class="mobile-provider" onclick="selectMobileProvider('telebirr')">
                        <div class="mobile-provider-icon">📞</div>
                        <div>Telebirr</div>
                    </div>
                </div>
                <div class="form-group">
                    <input type="text" id="mobile-number" class="mobile-number-input" placeholder="Enter your mobile number" required>
                </div>
                <div class="payment-modal-actions">
                    <button class="btn btn-success" onclick="processMobilePayment()">Send Payment Request</button>
                    <button class="btn btn-back" onclick="closeModalById('mobile-modal')">Cancel</button>
                </div>
            </div>
            <div id="mobile-message" class="message"></div>
        </div>
    `;
    
    document.body.appendChild(mobileModal);
    mobileModal.style.display = 'block';
}

// Helper function to close modals by ID
function closeModalById(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        modal.remove();
    }
}

// Process PayPal payment
function processPayPalPayment() {
    const email = document.getElementById('paypal-email').value;
    
    if (!email || !email.includes('@')) {
        showMessage('paypal-message', 'Please enter a valid PayPal email!', 'error');
        return;
    }
    
    showMessage('paypal-message', 'Redirecting to PayPal...', 'info');
    
    // Simulate PayPal payment processing
    setTimeout(() => {
        completeBooking('PayPal');
        closeModalById('paypal-modal');
    }, 2000);
}

// Confirm bank transfer
function confirmBankTransfer() {
    showMessage('bank-message', 'Your booking is pending confirmation. We will notify you once payment is received.', 'info');
    
    setTimeout(() => {
        completeBooking('Bank Transfer');
        closeModalById('bank-modal');
    }, 1500);
}

// Process mobile payment
let selectedMobileProvider = null;

function selectMobileProvider(provider) {
    selectedMobileProvider = provider;
    document.querySelectorAll('.mobile-provider').forEach(el => {
        el.classList.remove('selected');
    });
    const selected = document.querySelector(`[onclick="selectMobileProvider('${provider}')"]`);
    if (selected) selected.classList.add('selected');
}

function processMobilePayment() {
    const mobileNumber = document.getElementById('mobile-number').value;
    
    if (!selectedMobileProvider) {
        showMessage('mobile-message', 'Please select a mobile money provider!', 'error');
        return;
    }
    
    if (!mobileNumber || mobileNumber.length < 10) {
        showMessage('mobile-message', 'Please enter a valid mobile number!', 'error');
        return;
    }
    
    showMessage('mobile-message', `Sending payment request to ${selectedMobileProvider}...`, 'info');
    
    // Simulate mobile payment processing
    setTimeout(() => {
        completeBooking(`${selectedMobileProvider} Mobile Money`);
        closeModalById('mobile-modal');
    }, 2000);
}

// Modified completeBooking function to include payment method
function completeBooking(paymentMethod) {
    const booking = {
        id: Date.now().toString(),
        passengerName: currentUser.name,
        flightNumber: selectedFlight.flightNumber,
        source: selectedFlight.source,
        destination: selectedFlight.destination,
        departureTime: selectedFlight.departureTime,
        price: selectedFlight.price,
        bookingDate: new Date().toLocaleDateString(),
        selectedSeat: selectedSeat ? selectedSeat : null,
        paymentMethod: paymentMethod,
        paymentStatus: 'completed',
        paymentDate: new Date().toISOString()
    };

    // Add seat info to flight object
    if (selectedSeat) {
        if (!selectedFlight.bookedSeats) selectedFlight.bookedSeats = [];
        selectedFlight.bookedSeats.push(selectedSeat);
        markSeatOccupied(selectedFlight.flightNumber, selectedSeat);
    }

    selectedFlight.seatsAvailable--;

    bookings.push(booking);

    if (!currentUser.bookings) {
        currentUser.bookings = [];
    }
    currentUser.bookings.push(booking.id);

    localStorage.setItem('flights', JSON.stringify(flights));
    localStorage.setItem('bookings', JSON.stringify(bookings));
    localStorage.setItem('passengers', JSON.stringify(passengers));

    selectedSeat = null;
    selectedPaymentMethod = null;

    // Show success message based on payment method
    let successMessage = `Payment successful via ${paymentMethod}! Flight booked.`;
    if (paymentMethod === 'Bank Transfer') {
        successMessage = 'Booking submitted! Please complete bank transfer within 24 hours.';
    }

    showMessage('payment-message', successMessage, 'success');

    setTimeout(() => {
        closeModal();
        loadFlights();
        loadMyBookings();
        showMessage('passenger-login-message', 'Flight booked successfully!', 'success');
    }, 2000);
}
// Update the initializeData function to properly set dayOfWeek
function initializeData() {
    if (admins.length === 0) {
        admins.push({ username: "RESPECT_WORLD", password: "keiven12a" });
        localStorage.setItem('admins', JSON.stringify(admins));
    }

    if (flights.length === 0) {
        // Create flights for each day of the week
        const routes = [
            { source: "Addis Ababa (ADD)", destination: "Bahir Dar (BJR)", basePrice: 85 },
            { source: "Addis Ababa (ADD)", destination: "Mekele (MQX)", basePrice: 110 },
            { source: "Addis Ababa (ADD)", destination: "Gondar (GDQ)", basePrice: 95 },
            { source: "Addis Ababa (ADD)", destination: "Hawassa (AWA)", basePrice: 65 },
            { source: "Addis Ababa (ADD)", destination: "Dire Dawa (DIR)", basePrice: 70 },
            { source: "Addis Ababa (ADD)", destination: "Axum (AXU)", basePrice: 105 },
            { source: "Addis Ababa (ADD)", destination: "Lalibela (LLI)", basePrice: 120 }
        ];
        
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        const dayCodes = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
        const timeSlots = ['08:00', '10:00', '12:00', '14:00', '16:00'];
        
        flights = [];
        
        routes.forEach((route, routeIndex) => {
            days.forEach((day, dayIndex) => {
                // Add 1-2 flights per day for each route
                const flightCount = Math.floor(Math.random() * 2) + 1; // 1 or 2 flights
                
                for (let i = 0; i < flightCount; i++) {
                    const flightNumber = `ET${dayCodes[dayIndex]}${routeIndex + 1}${i + 1}`;
                    const timeIndex = i % timeSlots.length;
                    const departureTime = timeSlots[timeIndex];
                    
                    // Add some price variation based on day
                    let price = route.basePrice;
                    if (day === 'Friday' || day === 'Saturday' || day === 'Sunday') {
                        price = Math.round(price * 1.2); // 20% higher on weekends
                    } else if (day === 'Wednesday' || day === 'Thursday') {
                        price = Math.round(price * 1.1); // 10% higher on midweek
                    }
                    
                    flights.push({
                        flightNumber: flightNumber,
                        source: route.source,
                        destination: route.destination,
                        departureTime: departureTime,
                        seatsAvailable: 120 + Math.floor(Math.random() * 30), // 120-150 seats
                        price: price,
                        dayOfWeek: day // Make sure this is set
                    });
                }
            });
        });
        
        localStorage.setItem('flights', JSON.stringify(flights));
    } else {
        // If flights already exist, make sure they have dayOfWeek property
        let needUpdate = false;
        flights.forEach(flight => {
            if (!flight.dayOfWeek) {
                // Assign a random day if missing
                const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
                flight.dayOfWeek = days[Math.floor(Math.random() * days.length)];
                needUpdate = true;
            }
        });
        
        if (needUpdate) {
            localStorage.setItem('flights', JSON.stringify(flights));
        }
    }
    
    loadExistingUsers();
    
    // Log flights for debugging
    console.log('Available flights:');
    flights.forEach(f => {
        console.log(`${f.flightNumber}: ${f.source} → ${f.destination} (${f.dayOfWeek}, ${f.seatsAvailable} seats)`);
    });
}
// Add this function to test delay functionality
function testDelayFunction() {
    console.log('=== TESTING DELAY FUNCTION ===');
    
    // Check if we have any bookings
    if (bookings.length === 0) {
        console.log('No bookings found. Create a booking first.');
        return;
    }
    
    // Use the first booking for testing
    const testBooking = bookings[0];
    console.log('Test booking:', {
        id: testBooking.id,
        passengerName: testBooking.passengerName,
        flightNumber: testBooking.flightNumber,
        source: testBooking.source,
        destination: testBooking.destination
    });
    
    // Find the original flight
    const originalFlight = flights.find(f => f.flightNumber === testBooking.flightNumber);
    console.log('Original flight:', originalFlight);
    
    // Check flights on different days for same route
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    days.forEach(day => {
        const availableFlights = flights.filter(f => 
            f.source === testBooking.source && 
            f.destination === testBooking.destination &&
            f.dayOfWeek === day &&
            f.seatsAvailable > 0 &&
            f.flightNumber !== testBooking.flightNumber
        );
        
        console.log(`${day}: ${availableFlights.length} flights`);
        availableFlights.forEach(f => {
            console.log(`  ${f.flightNumber} at ${f.departureTime} ($${f.price}, ${f.seatsAvailable} seats)`);
        });
    });
    
    // Test updateDelayPrice function directly
    if (testBooking) {
        bookingToDelay = testBooking.id;
        console.log('\nCalling updateDelayPrice with Monday...');
        
        // Temporarily set day select
        const daySelect = document.createElement('select');
        daySelect.id = 'test-day-select';
        daySelect.value = 'monday';
        document.body.appendChild(daySelect);
        
        // Temporarily create other required elements
        if (!document.getElementById('new-price')) {
            const newPrice = document.createElement('span');
            newPrice.id = 'new-price';
            document.body.appendChild(newPrice);
        }
        
        // Call the function
        updateDelayPrice();
        
        // Clean up
        document.body.removeChild(daySelect);
    }
}
function loadExistingUsers() {
    const existingPassengers = document.getElementById('existing-passengers');
    const existingAdmins = document.getElementById('existing-admins');
    
    if (passengers.length > 0) {
        existingPassengers.innerHTML = '<h4>Passengers:</h4><div class="user-list">' +
            passengers.map(passenger => `
                <div class="user-item">
                    <span class="user-info">${passenger.name} (Age: ${passenger.age})</span>
                    <button class="quick-login-btn" onclick="quickLoginPassenger('${passenger.name}')">
                        Quick Login
                    </button>
                </div>
            `).join('') + '</div>';
    } else {
        existingPassengers.innerHTML = '<p class="message info">No passengers registered yet.</p>';
    }
    
    if (admins.length > 0) {
        existingAdmins.innerHTML = '<h4>Admins:</h4><div class="user-list">' +
            admins.map(admin => `
                <div class="user-item">
                    <span class="user-info">${admin.username}</span>
                    <button class="quick-login-btn" onclick="quickLoginAdmin('${admin.username}')">
                        Quick Login
                    </button>
                </div>
            `).join('') + '</div>';
    } else {
        existingAdmins.innerHTML = '<p class="message info">No admins registered yet.</p>';
    }
}

function loadQuickLogin() {
    const passengerQuickLogin = document.getElementById('passenger-quick-login');
    const adminQuickLogin = document.getElementById('admin-quick-login');
    
    if (passengers.length > 0) {
        passengerQuickLogin.innerHTML = '<div class="quick-login-buttons">' +
            passengers.map(passenger => `
                <div class="quick-login-item">
                    <span>${passenger.name} (Age: ${passenger.age})</span>
                    <button class="quick-login-btn" onclick="quickLoginPassenger('${passenger.name}')">
                        Login as ${passenger.name}
                    </button>
                </div>
            `).join('') + '</div>';
    } else {
        passengerQuickLogin.innerHTML = '<p class="message info">No passengers registered yet.</p>';
    }
    
    if (admins.length > 0) {
        adminQuickLogin.innerHTML = '<div class="quick-login-buttons">' +
            admins.map(admin => `
                <div class="quick-login-item">
                    <span>${admin.username}</span>
                    <button class="quick-login-btn" onclick="quickLoginAdmin('${admin.username}')">
                        Login as ${admin.username}
                    </button>
                </div>
            `).join('') + '</div>';
    } else {
        adminQuickLogin.innerHTML = '<p class="message info">No admins registered yet.</p>';
    }
}

function quickLoginPassenger(name) {
    const passenger = passengers.find(p => p.name === name);
    if (passenger) {
        document.getElementById('login-username').value = passenger.username;
        showMessage('passenger-login-message', `Auto-filled ${passenger.name}. Enter password to login.`, 'info');
    }
}

function quickLoginAdmin(username) {
    const admin = admins.find(a => a.username === username);
    if (admin) {
        document.getElementById('admin-login-username').value = admin.username;
        showMessage('admin-login-message', `Auto-filled ${admin.username}. Enter password to login.`, 'info');
    }
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    
    if (screenId === 'passenger-login' || screenId === 'admin-login') {
        loadQuickLogin();
    }
    
    if (screenId === 'main-menu') {
        loadExistingUsers();
    }
}

function showPassengerSection(sectionId) {
    document.querySelectorAll('#passenger-dashboard .section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    
    if (sectionId === 'book-flight') {
        setTimeout(() => {
            loadFlights();
        }, 100);
    }
    if (sectionId === 'my-bookings') loadMyBookings();
    if (sectionId === 'search-flights') {
        document.getElementById('search-results').innerHTML = '';
    }
}

function showAdminSection(sectionId) {
    document.querySelectorAll('#admin-dashboard .section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    
    if (sectionId === 'manage-flights') {
        setTimeout(() => {
            loadFlightsForManagement();
        }, 100);
    }
    if (sectionId === 'view-bookings') loadAllBookings();
    if (sectionId === 'statistics') loadStatistics();
}

function registerPassenger(event) {
    event.preventDefault();
    
    const name = document.getElementById('passenger-name').value.trim();
    const username = document.getElementById('passenger-username').value.trim();
    const gender = document.getElementById('passenger-gender').value;
    const age = parseInt(document.getElementById('passenger-age').value);
    const email = document.getElementById('passenger-email').value.trim();
    const passport = document.getElementById('passenger-passport').value.trim();
    const password = document.getElementById('passenger-password').value;
    const confirmPassword = document.getElementById('passenger-confirm-password').value;
    const messageEl = document.getElementById('passenger-register-message');
    messageEl.innerHTML = '';

    if (!name || !username || !gender || !age || !passport || !password || !confirmPassword) {
        showMessage('passenger-register-message', 'Please fill all required fields!', 'error');
        return;
    }
    if (age <= 0 || age > 120) {
        showMessage('passenger-register-message', 'Please enter a valid age (1-120)!', 'error');
        return;
    }
    if (password.length < 6) {
        showMessage('passenger-register-message', 'Password must be at least 6 characters!', 'error');
        return;
    }
    if (password !== confirmPassword) {
        showMessage('passenger-register-message', 'Passwords do not match!', 'error');
        return;
    }
    if (passengers.some(p => p.username === username)) {
        showMessage('passenger-register-message', 'Username already exists!', 'error');
        return;
    }
    
    const newPassenger = {
        name,
        username,
        gender,
        age,
        email,
        passport,
        password,
        bookings: []
    };
    
    passengers.push(newPassenger);
    localStorage.setItem('passengers', JSON.stringify(passengers));
    
    showMessage('passenger-register-message', 'Registration successful! Please login.', 'success');
    event.target.reset();
    
    loadExistingUsers();
    loadQuickLogin();
    
    setTimeout(() => {
        showScreen('passenger-login');
        document.getElementById('login-username').value = username;
    }, 1500);
}

function loginAdmin(event) {
    event.preventDefault();
    
    const username = document.getElementById('admin-login-username').value;
    const password = document.getElementById('admin-login-password').value;
    
    const admin = admins.find(a => a.username === username && a.password === password);
    
    if (admin) {
        currentAdmin = admin;
        document.getElementById('admin-welcome').textContent = `Welcome, ${admin.username}!`;
        showScreen('admin-dashboard');
        
        setTimeout(() => {
            loadFlightsForManagement();
        }, 100);
        
        event.target.reset();
    } else {
        const existingAdmin = admins.find(a => a.username === username);
        if (existingAdmin) {
            showMessage('admin-login-message', 
                'Incorrect password! Please try again.', 
                'error'
            );
        } else {
            showMessage('admin-login-message', 
                `Admin "${username}" not found! Only pre-registered admins can access the system.`, 
                'error'
            );
        }
    }
}

function loginPassenger(event) {
    event.preventDefault();
    
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;

    if (!username || !password) {
        showMessage('passenger-login-message', 'Please fill all fields!', 'error');
        return;
    }
    
    const passenger = passengers.find(p => p.username === username && p.password === password);

    if (passenger) {
        currentUser = passenger;
        document.getElementById('passenger-welcome').textContent = `${translations[currentLanguage]['welcome']} ${passenger.name}!`;
        showScreen('passenger-dashboard');
        
        setTimeout(() => {
            loadFlights();
        }, 100);
        
        event.target.reset();
    } else {
        const existingPassenger = passengers.find(p => p.username === username);
        if (existingPassenger) {
            showMessage('passenger-login-message', 'Incorrect password! Please try again.', 'error');
        } else {
            showMessage('passenger-login-message', 'Username not found! Please register first.', 'error');
        }
    }
}

function logout() {
    currentUser = null;
    currentAdmin = null;
    selectedFlight = null;
    flightToManage = null;
    
    alert('You have been successfully logged out!');
    showScreen('main-menu');
    clearForms();
}

function clearForms() {
    const loginUsername = document.getElementById('login-username');
    const loginPassword = document.getElementById('login-password');
    const adminLoginUsername = document.getElementById('admin-login-username');
    const adminLoginPassword = document.getElementById('admin-login-password');
    
    if (loginUsername) loginUsername.value = '';
    if (loginPassword) loginPassword.value = '';
    if (adminLoginUsername) adminLoginUsername.value = '';
    if (adminLoginPassword) adminLoginPassword.value = '';
}

// FIXED: Load flights for passenger
// Update loadFlights() function to show day information:
function loadFlights() {
    const flightsList = document.getElementById('flights-list');
    if (!flightsList) return;
    
    flightsList.innerHTML = '';
    
    const availableFlights = flights.filter(f => f.seatsAvailable > 0);
    
    if (availableFlights.length === 0) {
        flightsList.innerHTML = '<div class="message warning">No available flights!</div>';
        return;
    }
    
    availableFlights.forEach(flight => {
        const flightCard = document.createElement('div');
        flightCard.className = 'flight-card ethiopian-flight';
        flightCard.innerHTML = `
            <div class="flight-route">${flight.source} → ${flight.destination}</div>
            <div class="flight-details">
                <strong>Flight:</strong> ${flight.flightNumber}<br>
                <strong>Day:</strong> ${flight.dayOfWeek || 'Daily'}<br>
                <strong>Time:</strong> ${flight.departureTime}<br>
                <strong>Seats:</strong> ${flight.seatsAvailable}<br>
                <strong>Price:</strong> $${flight.price}
            </div>
            <button class="book-btn" data-flight-number="${flight.flightNumber}">Book Flight</button>
        `;
        flightsList.appendChild(flightCard);
    });
}
function searchFlights() {
    const from = document.getElementById('search-from').value.toLowerCase();
    const to = document.getElementById('search-to').value.toLowerCase();
    const results = document.getElementById('search-results');
    
    const filteredFlights = flights.filter(flight => 
        flight.source.toLowerCase().includes(from) && 
        flight.destination.toLowerCase().includes(to) &&
        flight.seatsAvailable > 0
    );
    
    results.innerHTML = '';
    
    if (filteredFlights.length === 0) {
        results.innerHTML = '<div class="message warning">No flights found!</div>';
        return;
    }
    
    filteredFlights.forEach(flight => {
        const flightCard = document.createElement('div');
        flightCard.className = 'flight-card ethiopian-flight';
        flightCard.innerHTML = `
            <div class="flight-route">${flight.source} → ${flight.destination}</div>
            <div class="flight-details">
                ${flight.flightNumber} | ${flight.departureTime} | 
                Seats: ${flight.seatsAvailable} | $${flight.price}
            </div>
            <button class="book-btn" data-flight-number="${flight.flightNumber}">Book Flight</button>
        `;
        results.appendChild(flightCard);
    });
}


window.bookFlight = function(flightNumber) {
    const flight = flights.find(f => f.flightNumber === flightNumber);
    
    if (!flight) {
        alert(translations[currentLanguage]['flight_not_found']);
        return;
    }
    
    if (flight.seatsAvailable <= 0) {
        alert(translations[currentLanguage]['no_seats']);
        return;
    }
    
    if (!currentUser) {
        alert(translations[currentLanguage]['please_login']);
        showScreen('passenger-login');
        return;
    }
    
    // Save selected flight then open seat selection modal before payment
    selectedFlight = flight;
    showSeatModal(flightNumber);
}

function processPayment() {
    if (!selectedFlight || !currentUser) {
        showMessage('payment-message', 'Error processing payment! Please try again.', 'error');
        return;
    }
    
    const cardNumber = document.getElementById('card-number').value;
    const cardCVV = document.getElementById('card-cvv').value;
    const cardExpiry = document.getElementById('card-expiry').value;
    
    if (!cardNumber || !cardCVV || !cardExpiry) {
        showMessage('payment-message', 'Please fill all payment details!', 'error');
        return;
    }
    
    const cleanCardNumber = cardNumber.replace(/[\s-]/g, '');
    
    if (!/^\d{13,19}$/.test(cleanCardNumber)) {
        showMessage('payment-message', 'Please enter a valid card number (13-19 digits)!', 'error');
        return;
    }
    
    if (!/^\d{3,4}$/.test(cardCVV)) {
        showMessage('payment-message', 'Please enter a valid CVV (3 or 4 digits)!', 'error');
        return;
    }
    
    if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) {
        showMessage('payment-message', 'Please enter expiry date in MM/YY format!', 'error');
        return;
    }
    
    const booking = {
        id: Date.now().toString(),
        passengerName: currentUser.name,
        flightNumber: selectedFlight.flightNumber,
        source: selectedFlight.source,
        destination: selectedFlight.destination,
        departureTime: selectedFlight.departureTime,
        price: selectedFlight.price,
        bookingDate: new Date().toLocaleDateString(),
        selectedSeat: selectedSeat ? selectedSeat : null
    };

    // Add seat info to flight object for this booking
    if (selectedSeat) {
        if (!selectedFlight.bookedSeats) selectedFlight.bookedSeats = [];
        selectedFlight.bookedSeats.push(selectedSeat);
    }

    selectedFlight.seatsAvailable--;

    bookings.push(booking);

    if (!currentUser.bookings) {
        currentUser.bookings = [];
    }
    currentUser.bookings.push(booking.id);

    localStorage.setItem('flights', JSON.stringify(flights));
    localStorage.setItem('bookings', JSON.stringify(bookings));
    localStorage.setItem('passengers', JSON.stringify(passengers));

    // mark the seat occupied (persist) after successful payment
    if (booking.selectedSeat) {
        markSeatOccupied(selectedFlight.flightNumber, booking.selectedSeat);
    }
    // clear temporary selection
    selectedSeat = null;

    showMessage('payment-message', 'Payment successful! Flight booked.', 'success');

    setTimeout(() => {
        closeModal();
        loadFlights();
        loadMyBookings();
        showMessage('passenger-login-message', 'Flight booked successfully!', 'success');
    }, 2000);
}

function loadMyBookings() {
    const myBookingsList = document.getElementById('my-bookings-list');
    myBookingsList.innerHTML = '';
    
    if (!currentUser) return;
    
    const userBookings = bookings.filter(booking => booking.passengerName === currentUser.name);
    
    if (userBookings.length === 0) {
        myBookingsList.innerHTML = '<div class="message info">No bookings found!</div>';
        return;
    }
    
    userBookings.forEach(booking => {
        const bookingCard = document.createElement('div');
        bookingCard.className = 'booking-card';
        bookingCard.id = `booking-${booking.id}`;
        
        // Check if flight is within 24 hours (no cancellation allowed)
        const bookingDate = new Date(booking.bookingDate);
        const now = new Date();
        const hoursDifference = (now - bookingDate) / (1000 * 60 * 60);
        const canCancel = hoursDifference <= 24; // Allow cancellation within 24 hours
        
        bookingCard.innerHTML = `
            <div class="flight-route">${booking.source} → ${booking.destination}</div>
            <div class="flight-details">
                <strong>Flight:</strong> ${booking.flightNumber} <br>
                <strong>Time:</strong> ${booking.departureTime} <br>
                <strong>Date:</strong> ${booking.bookingDate} <br>
                <strong>Price:</strong> $${booking.price} <br>
                ${booking.selectedSeat ? `<strong>Seat:</strong> ${booking.selectedSeat} <br>` : ''}
                <strong>Status:</strong> <span class="booking-status ${booking.status || 'confirmed'}">${booking.status || 'Confirmed'}</span>
            </div>
            <div class="booking-actions">
                ${canCancel ? `<button class="action-btn cancel-btn" onclick="showCancelConfirmation('${booking.id}')" data-i18n="cancel_booking">Cancel Booking</button>` : ''}
                ${canCancel ? `<button class="action-btn delay-btn" onclick="showDelayOptions('${booking.id}')" data-i18n="delay_booking">Delay Booking</button>` : ''}
            </div>
        `;
        myBookingsList.appendChild(bookingCard);
    });
}
// ============ BOOKING CANCELLATION FUNCTIONS ============

let bookingToCancel = null;
let bookingToDelay = null;

// Show cancel confirmation modal
function showCancelConfirmation(bookingId) {
    const booking = bookings.find(b => b.id === bookingId);
    if (!booking) return;
    
    bookingToCancel = bookingId;
    
    // Update modal with booking info
    const cancelModal = document.getElementById('cancel-booking-modal');
    if (cancelModal) {
        cancelModal.style.display = 'block';
    }
}

// Close cancel modal
function closeCancelModal() {
    const cancelModal = document.getElementById('cancel-booking-modal');
    if (cancelModal) {
        cancelModal.style.display = 'none';
    }
    bookingToCancel = null;
}

// Confirm booking cancellation
function confirmCancelBooking() {
    if (!bookingToCancel) return;
    
    const bookingIndex = bookings.findIndex(b => b.id === bookingToCancel);
    if (bookingIndex === -1) return;
    
    const booking = bookings[bookingIndex];
    
    // Calculate refund based on cancellation time
    const bookingDate = new Date(booking.bookingDate);
    const now = new Date();
    const hoursDifference = (now - bookingDate) / (1000 * 60 * 60);
    
    let refundPercentage = 0;
    if (hoursDifference <= 24) {
        refundPercentage = 90;
    } else if (hoursDifference <= 48) {
        refundPercentage = 75;
    } else {
        refundPercentage = 50;
    }
    
    const refundAmount = (booking.price * refundPercentage) / 100;
    
    // Update booking status
    booking.status = 'cancelled';
    booking.cancellationDate = new Date().toISOString();
    booking.refundAmount = refundAmount;
    booking.refundPercentage = refundPercentage;
    
    // Free up the seat
    const flight = flights.find(f => f.flightNumber === booking.flightNumber);
    if (flight && booking.selectedSeat) {
        // Remove seat from occupied seats
        const seatMaps = JSON.parse(localStorage.getItem('seatmaps') || '{}');
        if (seatMaps[flight.flightNumber]) {
            seatMaps[flight.flightNumber] = seatMaps[flight.flightNumber].filter(seat => seat !== booking.selectedSeat);
            localStorage.setItem('seatmaps', JSON.stringify(seatMaps));
        }
        
        // Increase available seats
        flight.seatsAvailable++;
    }
    
    // Save to localStorage
    localStorage.setItem('bookings', JSON.stringify(bookings));
    localStorage.setItem('flights', JSON.stringify(flights));
    
    // Show success message
    showMessage('cancel-message', `Booking cancelled! You will receive $${refundAmount.toFixed(2)} refund (${refundPercentage}%).`, 'success');
    
    setTimeout(() => {
        closeCancelModal();
        loadMyBookings();
        loadAllBookings(); // Update admin view
        loadFlights(); // Update flight availability
        loadStatistics(); // Update statistics
    }, 2000);
}
// ============ DELAY BOOKING FUNCTIONS ============

let selectedDayForDelay = null;
let assignedFlightForDelay = null;
let delaySurchargeAmount = 0;

// Show delay options modal
function showDelayOptions(bookingId) {
    console.log('Delay button clicked for booking:', bookingId);
    
    const booking = bookings.find(b => b.id === bookingId);
    if (!booking) {
        console.error('Booking not found:', bookingId);
        return;
    }
    
    bookingToDelay = bookingId;
    
    // Reset all delay variables
    selectedDayForDelay = null;
    assignedFlightForDelay = null;
    delaySurchargeAmount = 0;
    
    // Populate day options
    const daySelect = document.getElementById('day-select');
    if (!daySelect) {
        console.error('day-select element not found!');
        return;
    }
    
    // Clear previous selection
    daySelect.value = '';
    
    // Set original price
    document.getElementById('original-price').textContent = `$${booking.price}`;
    document.getElementById('new-price').textContent = '$0';
    document.getElementById('delay-surcharge').textContent = '$0';
    document.getElementById('price-difference').textContent = '$0';
    
    // Hide flight info initially
    document.getElementById('delay-flight-info').style.display = 'none';
    
    // Reset the reason dropdown
    document.getElementById('delay-reason').value = '';
    
    // Clear messages
    const delayMessageEl = document.getElementById('delay-message');
    if (delayMessageEl) {
        delayMessageEl.innerHTML = '';
    }
    
    // Show modal
    const delayModal = document.getElementById('delay-booking-modal');
    if (delayModal) {
        delayModal.style.display = 'block';
        console.log('Delay modal displayed');
    } else {
        console.error('Delay modal element not found!');
    }
}

// Updated updateDelayPrice function with better matching
// Add this function to debug flight availability
function debugFlightAvailability(bookingId) {
    const booking = bookings.find(b => b.id === bookingId);
    if (!booking) {
        console.log('Booking not found');
        return;
    }
    
    console.log('=== DEBUG FLIGHT AVAILABILITY ===');
    console.log('Booking details:', {
        id: booking.id,
        flightNumber: booking.flightNumber,
        source: booking.source,
        destination: booking.destination,
        passenger: booking.passengerName
    });
    
    // Find the original flight
    const originalFlight = flights.find(f => f.flightNumber === booking.flightNumber);
    console.log('Original flight:', originalFlight);
    
    // Show ALL flights for this route
    console.log('\n=== ALL FLIGHTS FOR THIS ROUTE ===');
    const routeFlights = flights.filter(f => 
        f.source === booking.source && 
        f.destination === booking.destination
    );
    
    if (routeFlights.length === 0) {
        console.log('No flights found for this route!');
        console.log('Available routes:', [...new Set(flights.map(f => `${f.source} → ${f.destination}`))]);
    } else {
        console.log(`Found ${routeFlights.length} flights for ${booking.source} → ${booking.destination}:`);
        routeFlights.forEach(f => {
            console.log(`  ${f.flightNumber}: ${f.dayOfWeek} at ${f.departureTime} (${f.seatsAvailable} seats, $${f.price})`);
        });
        
        // Show flights available for delay (different flight number, has seats)
        console.log('\n=== FLIGHTS AVAILABLE FOR DELAY ===');
        const delayFlights = routeFlights.filter(f => 
            f.flightNumber !== booking.flightNumber && 
            f.seatsAvailable > 0
        );
        
        if (delayFlights.length === 0) {
            console.log('No flights available for delay!');
            console.log('Reasons:');
            routeFlights.forEach(f => {
                if (f.flightNumber === booking.flightNumber) {
                    console.log(`  ${f.flightNumber}: This is the original flight`);
                } else if (f.seatsAvailable <= 0) {
                    console.log(`  ${f.flightNumber}: No seats available (${f.seatsAvailable} seats)`);
                }
            });
        } else {
            console.log(`Found ${delayFlights.length} flights available for delay:`);
            delayFlights.forEach(f => {
                console.log(`  ${f.flightNumber}: ${f.dayOfWeek} at ${f.departureTime} (${f.seatsAvailable} seats)`);
            });
        }
    }
}

// Now let's fix the updateDelayPrice function to be more aggressive in finding alternatives
function updateDelayPrice() {
    console.log('=== UPDATE DELAY PRICE CALLED ===');
    
    const daySelect = document.getElementById('day-select');
    const selectedDay = daySelect.value;
    
    if (!selectedDay) {
        console.log('No day selected');
        resetDelayPriceUI();
        return;
    }
    
    const booking = bookings.find(b => b.id === bookingToDelay);
    if (!booking) {
        console.error('Booking not found');
        showMessage('delay-message', 'Error: Booking not found!', 'error');
        return;
    }
    
    // Debug the booking first
    debugFlightAvailability(bookingToDelay);
    
    // Convert selected day to proper format
    const dayName = selectedDay.charAt(0).toUpperCase() + selectedDay.slice(1);
    
    console.log(`\nLooking for ${dayName} flights for delay...`);
    
    // STRATEGY 1: Find exact match for the selected day
    let availableFlights = flights.filter(f => {
        return f.source === booking.source &&
               f.destination === booking.destination &&
               f.dayOfWeek === dayName &&
               f.seatsAvailable > 0 &&
               f.flightNumber !== booking.flightNumber;
    });
    
    console.log(`Strategy 1 (exact day match): Found ${availableFlights.length} flights`);
    
    // STRATEGY 2: If no exact match, find ANY flight on ANY day for same route
    if (availableFlights.length === 0) {
        console.log('Trying Strategy 2: Any flight on any day');
        availableFlights = flights.filter(f => {
            return f.source === booking.source &&
                   f.destination === booking.destination &&
                   f.seatsAvailable > 0 &&
                   f.flightNumber !== booking.flightNumber;
        });
        console.log(`Strategy 2 (any day): Found ${availableFlights.length} flights`);
    }
    
    // STRATEGY 3: If still no flights, try to find flights with similar routes
    if (availableFlights.length === 0) {
        console.log('Trying Strategy 3: Similar routes');
        
        // First, try flights from same departure to ANY destination
        let similarFlights = flights.filter(f => {
            return f.source === booking.source &&
                   f.seatsAvailable > 0 &&
                   f.flightNumber !== booking.flightNumber;
        });
        
        // If we found some, show them
        if (similarFlights.length > 0) {
            console.log(`Found ${similarFlights.length} flights from same departure:`, 
                similarFlights.map(f => `${f.destination} (${f.dayOfWeek})`));
            
            // Let the user choose from these
            availableFlights = similarFlights.slice(0, 1); // Take first one for now
            console.log('Will offer alternative destination:', availableFlights[0].destination);
        }
    }
    
    // If we found flights, proceed
    if (availableFlights.length > 0) {
        assignedFlightForDelay = availableFlights[0];
        selectedDayForDelay = selectedDay;
        
        console.log('Selected flight for delay:', assignedFlightForDelay);
        
        // Calculate and display prices
        calculateAndDisplayDelayPrices(booking, dayName);
        
        // Show appropriate message
        if (assignedFlightForDelay.dayOfWeek === dayName) {
            showMessage('delay-message', 
                `✅ Found flight on ${dayName}: ${assignedFlightForDelay.flightNumber} at ${assignedFlightForDelay.departureTime}`, 
                'success'
            );
        } else {
            showMessage('delay-message', 
                `⚠️ No ${dayName} flights. Offering ${assignedFlightForDelay.dayOfWeek} flight instead: ${assignedFlightForDelay.flightNumber}`, 
                'warning'
            );
        }
        
    } else {
        // Last resort: create a dummy flight for demonstration
        console.log('No flights found. Creating demonstration flight...');
        createDemoFlightForDelay(booking, dayName);
    }
}

// Function to create a demo flight when no real flights are available
function createDemoFlightForDelay(booking, dayName) {
    // Create a dummy flight for demonstration
    const demoFlightNumber = `ET-DLY-${Date.now().toString().slice(-4)}`;
    
    assignedFlightForDelay = {
        flightNumber: demoFlightNumber,
        source: booking.source,
        destination: booking.destination,
        departureTime: '14:00',
        seatsAvailable: 10,
        price: Math.round(booking.price * 1.2), // 20% higher
        dayOfWeek: dayName,
        isDemo: true
    };
    
    selectedDayForDelay = dayName.toLowerCase();
    
    console.log('Created demo flight:', assignedFlightForDelay);
    
    // Calculate and display prices
    calculateAndDisplayDelayPrices(booking, dayName);
    
    showMessage('delay-message', 
        `⚠️ No real flights found. Created demonstration flight for ${dayName}.`, 
        'warning'
    );
}

// Also, let's add a function to generate more flights if needed
function generateMoreFlightsForTesting() {
    console.log('Generating additional flights for testing...');
    
    const routes = [
        { source: "Addis Ababa (ADD)", destination: "Bahir Dar (BJR)", basePrice: 85 },
        { source: "Addis Ababa (ADD)", destination: "Mekele (MQX)", basePrice: 110 },
        { source: "Addis Ababa (ADD)", destination: "Gondar (GDQ)", basePrice: 95 },
        { source: "Addis Ababa (ADD)", destination: "Hawassa (AWA)", basePrice: 65 },
        { source: "Addis Ababa (ADD)", destination: "Dire Dawa (DIR)", basePrice: 70 },
        { source: "Addis Ababa (ADD)", destination: "Axum (AXU)", basePrice: 105 },
        { source: "Addis Ababa (ADD)", destination: "Lalibela (LLI)", basePrice: 120 }
    ];
    
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const timeSlots = ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00'];
    
    let newFlightsCount = 0;
    
    routes.forEach(route => {
        days.forEach(day => {
            // Add 2-3 flights per day for each route
            const flightCount = 2 + Math.floor(Math.random() * 2);
            
            for (let i = 0; i < flightCount; i++) {
                const flightNumber = `ET-${day.slice(0, 2)}-${route.destination.slice(0, 3)}-${i + 1}`;
                
                // Check if flight already exists
                if (!flights.find(f => f.flightNumber === flightNumber)) {
                    const timeIndex = (i + days.indexOf(day)) % timeSlots.length;
                    const departureTime = timeSlots[timeIndex];
                    
                    let price = route.basePrice;
                    if (day === 'Friday' || day === 'Saturday' || day === 'Sunday') {
                        price = Math.round(price * 1.2);
                    }
                    
                    const newFlight = {
                        flightNumber: flightNumber,
                        source: route.source,
                        destination: route.destination,
                        departureTime: departureTime,
                        seatsAvailable: 50 + Math.floor(Math.random() * 100),
                        price: price,
                        dayOfWeek: day
                    };
                    
                    flights.push(newFlight);
                    newFlightsCount++;
                    
                    console.log(`Added: ${flightNumber} - ${route.source} → ${route.destination} on ${day} at ${departureTime}`);
                }
            }
        });
    });
    
    localStorage.setItem('flights', JSON.stringify(flights));
    console.log(`Generated ${newFlightsCount} new flights for testing`);
    alert(`Generated ${newFlightsCount} new flights. Now try delaying a booking again.`);
    
    return newFlightsCount;
}

// Add this to make the function accessible from console
window.generateTestFlights = generateMoreFlightsForTesting;

// Helper function to calculate and display prices
function calculateAndDisplayDelayPrices(booking, dayName) {
    if (!assignedFlightForDelay) return;
    
    const dayMultipliers = {
        'monday': 1.0,
        'tuesday': 1.1,
        'wednesday': 1.2,
        'thursday': 1.15,
        'friday': 1.25,
        'saturday': 1.3,
        'sunday': 1.35
    };
    
    const multiplier = dayMultipliers[selectedDayForDelay] || 1.0;
    const originalFlightPrice = assignedFlightForDelay.price;
    const increasedPrice = Math.round(originalFlightPrice * multiplier);
    delaySurchargeAmount = increasedPrice - originalFlightPrice;
    const REBOOKING_FEE = 25;
    const totalNewPrice = increasedPrice + REBOOKING_FEE;
    
    // Update UI
    document.getElementById('assigned-flight-number').textContent = assignedFlightForDelay.flightNumber;
    document.getElementById('assigned-departure-time').textContent = assignedFlightForDelay.departureTime;
    document.getElementById('delay-flight-info').style.display = 'block';
    
    document.getElementById('new-price').textContent = `$${increasedPrice}`;
    document.getElementById('delay-surcharge').textContent = `$${delaySurchargeAmount}`;
    document.getElementById('rebooking-fee').textContent = `$${REBOOKING_FEE}`;
    document.getElementById('price-difference').textContent = `$${totalNewPrice}`;
    
    // Color code
    const diffElement = document.getElementById('price-difference');
    const priceDifference = totalNewPrice - booking.price;
    diffElement.style.color = priceDifference > 0 ? '#dc3545' : priceDifference < 0 ? '#28a745' : '#6c757d';
    
    showMessage('delay-message', 
        `Flight found: ${assignedFlightForDelay.flightNumber} at ${assignedFlightForDelay.departureTime}`, 
        'success'
    );
}
// Add this helper function to log all flights by day
function logAllFlightsByDay() {
    console.log('=== FLIGHTS BY DAY ===');
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    days.forEach(day => {
        const dayFlights = flights.filter(f => f.dayOfWeek === day);
        console.log(`${day}: ${dayFlights.length} flights`);
        dayFlights.forEach(f => {
            console.log(`  ${f.flightNumber}: ${f.source} → ${f.destination} (${f.seatsAvailable} seats, $${f.price})`);
        });
    });
    
    // Also log flights without dayOfWeek
    const noDayFlights = flights.filter(f => !f.dayOfWeek);
    if (noDayFlights.length > 0) {
        console.log('Flights without dayOfWeek:', noDayFlights.length);
        noDayFlights.forEach(f => {
            console.log(`  ${f.flightNumber}: ${f.source} → ${f.destination}`);
        });
    }
}
// Process delay booking when confirm button is clicked

function processDelayBooking() {
console.log('bookingToDelay:', bookingToDelay);
console.log('day-select element:', document.getElementById('day-select'));
console.log('delay-reason element:', document.getElementById('delay-reason'));
    
    if (!bookingToDelay) {
        showMessage('delay-message', 'No booking selected for delay!', 'error');
        return;
    }
    
    // Get the booking
    const booking = bookings.find(b => b.id === bookingToDelay);
    if (!booking) {
        showMessage('delay-message', 'Error: Booking not found!', 'error');
        return;
    }
    
    // Get values directly from the form elements
    const daySelect = document.getElementById('day-select');
    const delayReasonSelect = document.getElementById('delay-reason');
    
    if (!daySelect) {
        showMessage('delay-message', 'Error: Day selection element not found!', 'error');
        return;
    }
    
    const selectedDay = daySelect.value;
    const delayReason = delayReasonSelect ? delayReasonSelect.value : '';
    
    console.log('Selected values:', { selectedDay, delayReason, bookingToDelay });
    
    // Validate that a day is selected
    if (!selectedDay) {
        showMessage('delay-message', 'Please select a day for your delayed flight!', 'error');
        return;
    }
    
    // Make sure we have an assigned flight (this should have been set by updateDelayPrice)
    if (!assignedFlightForDelay) {
        showMessage('delay-message', 'Please wait while we assign a flight for the selected day, or select a different day.', 'warning');
        
        // Try to assign a flight now
        updateDelayPrice();
        
        // Check again
        setTimeout(() => {
            if (!assignedFlightForDelay) {
                showMessage('delay-message', 'No flights available for the selected day. Please choose a different day.', 'error');
            }
        }, 500);
        return;
    }
    
    console.log('Processing delay for flight:', assignedFlightForDelay.flightNumber);
    
    // Process the delay with the values from the form
    processDelayConfirmation(selectedDay, delayReason);
}

// Also update the processDelayConfirmation function to ensure it works correctly:

function processDelayConfirmation(selectedDay, delayReason) {
    console.log('Processing delay confirmation with:', { selectedDay, delayReason });
    
    const booking = bookings.find(b => b.id === bookingToDelay);
    if (!booking) {
        showMessage('delay-message', 'Error: Booking not found!', 'error');
        return;
    }
    
    if (!assignedFlightForDelay) {
        showMessage('delay-message', 'Error: No flight assigned! Please select a different day.', 'error');
        return;
    }
    
    // Calculate prices based on selected day
    const dayMultipliers = {
        'monday': 1.0,
        'tuesday': 1.1,
        'wednesday': 1.2,
        'thursday': 1.15,
        'friday': 1.25,
        'saturday': 1.3,
        'sunday': 1.35
    };
    
    const multiplier = dayMultipliers[selectedDay] || 1.0;
    const originalFlightPrice = assignedFlightForDelay.price;
    const increasedPrice = Math.round(originalFlightPrice * multiplier);
    const REBOOKING_FEE = 25;
    const totalNewPrice = increasedPrice + REBOOKING_FEE;
    
    console.log('Price calculation:', {
        multiplier,
        originalFlightPrice,
        increasedPrice,
        REBOOKING_FEE,
        totalNewPrice
    });
    
    // Free up old seat
    const oldFlight = flights.find(f => f.flightNumber === booking.flightNumber);
    if (oldFlight && booking.selectedSeat) {
        const seatMaps = JSON.parse(localStorage.getItem('seatmaps') || '{}');
        if (seatMaps[oldFlight.flightNumber]) {
            seatMaps[oldFlight.flightNumber] = seatMaps[oldFlight.flightNumber].filter(seat => seat !== booking.selectedSeat);
            localStorage.setItem('seatmaps', JSON.stringify(seatMaps));
        }
        oldFlight.seatsAvailable++;
    }
    
    // Update booking with delay information
    booking.status = 'delayed';
    booking.originalFlightNumber = booking.flightNumber;
    booking.originalPrice = booking.price;
    booking.flightNumber = assignedFlightForDelay.flightNumber;
    booking.departureTime = assignedFlightForDelay.departureTime;
    booking.price = totalNewPrice;
    booking.selectedSeat = null; // Passenger needs to select new seat
    booking.delayReason = delayReason || 'No reason provided';
    booking.delayDay = selectedDay.charAt(0).toUpperCase() + selectedDay.slice(1);
    booking.rebookingFee = REBOOKING_FEE;
    booking.delaySurcharge = increasedPrice - originalFlightPrice;
    booking.delayDate = new Date().toISOString();
    
    // Decrease seats on new flight
    assignedFlightForDelay.seatsAvailable--;
    
    // Save to localStorage
    localStorage.setItem('bookings', JSON.stringify(bookings));
    localStorage.setItem('flights', JSON.stringify(flights));
    
    // Show success message
    const dayName = selectedDay.charAt(0).toUpperCase() + selectedDay.slice(1);
    showMessage('delay-message', 
        `✅ Booking delayed to ${dayName} successfully!<br>
        <strong>New Flight:</strong> ${assignedFlightForDelay.flightNumber}<br>
        <strong>New Time:</strong> ${assignedFlightForDelay.departureTime}<br>
        <strong>Total Price:</strong> $${totalNewPrice}<br>
        <strong>Status:</strong> You need to select a new seat for your delayed flight.`, 
        'success'
    );
    
    // Reset variables
    selectedDayForDelay = null;
    assignedFlightForDelay = null;
    delaySurchargeAmount = 0;
    bookingToDelay = null;
    
    // Close modal and refresh data after 3 seconds
    setTimeout(() => {
        closeDelayModal();
        loadMyBookings();
        loadAllBookings();
        loadFlights();
        loadStatistics();
        
        // Show success notification
        alert(`Booking delayed successfully to ${dayName}!\nNew Flight: ${assignedFlightForDelay ? assignedFlightForDelay.flightNumber : 'Unknown'}\nPlease select a new seat.`);
    }, 3000);
}
// Close delay modal
function closeDelayModal() {
    const delayModal = document.getElementById('delay-booking-modal');
    if (delayModal) {
        delayModal.style.display = 'none';
    }
    
    // Reset all form elements
    const daySelect = document.getElementById('day-select');
    const delayReasonSelect = document.getElementById('delay-reason');
    
    if (daySelect) daySelect.value = '';
    if (delayReasonSelect) delayReasonSelect.value = '';
    
    // Reset display elements
    document.getElementById('original-price').textContent = '$0';
    document.getElementById('new-price').textContent = '$0';
    document.getElementById('delay-surcharge').textContent = '$0';
    document.getElementById('price-difference').textContent = '$0';
    document.getElementById('delay-flight-info').style.display = 'none';
    
    // Clear messages
    const delayMessageEl = document.getElementById('delay-message');
    if (delayMessageEl) delayMessageEl.innerHTML = '';
    
    // Reset variables
    bookingToDelay = null;
    selectedDayForDelay = null;
    assignedFlightForDelay = null;
    delaySurchargeAmount = 0;
}
// Validate delay form
// Validate delay form
// Validate delay form
function validateDelayForm() {
    const daySelect = document.getElementById('day-select');
    const selectedDay = daySelect.value;
    
    if (!selectedDay) {
        showMessage('delay-message', 'Please select a day for your delayed flight!', 'error');
        return false;
    }
    
    // Make sure we have an assigned flight
    if (!assignedFlightForDelay) {
        showMessage('delay-message', 'Please wait while we assign a flight for the selected day.', 'warning');
        return false;
    }
    
    // Update the global variable to be safe
    selectedDayForDelay = selectedDay;
    
    return true;
}
// Update your existing click event listener to include new modals:
window.addEventListener('click', function(event) {
    const cancelModal = document.getElementById('cancel-booking-modal');
    const delayModal = document.getElementById('delay-booking-modal');
    
    if (event.target === cancelModal) {
        closeCancelModal();
    }
    if (event.target === delayModal) {
        closeDelayModal();
    }
});
function addFlight(event) {
    event.preventDefault();
    
    const flightNumber = document.getElementById('flight-number').value;
    const source = document.getElementById('flight-source').value;
    const destination = document.getElementById('flight-destination').value;
    const departureTime = document.getElementById('flight-time').value;
    const seatsAvailable = parseInt(document.getElementById('flight-seats').value);
    const price = parseFloat(document.getElementById('flight-price').value);
    
    const existingFlight = flights.find(f => f.flightNumber === flightNumber);
    if (existingFlight) {
        showMessage('add-flight-message', `Flight ${flightNumber} already exists!`, 'error');
        return;
    }
    
    const newFlight = {
        flightNumber,
        source,
        destination,
        departureTime,
        seatsAvailable,
        price
    };
    
    flights.push(newFlight);
    localStorage.setItem('flights', JSON.stringify(flights));
    
    showMessage('add-flight-message', `Flight ${flightNumber} added successfully!`, 'success');
    event.target.reset();
    
    loadFlightsForManagement();
}

// FIXED: Load flights for management WITH EDIT/DELETE buttons
function loadFlightsForManagement() {
    const manageFlightsList = document.getElementById('manage-flights-list');
    if (!manageFlightsList) return;
    
    manageFlightsList.innerHTML = '';
    
    if (flights.length === 0) {
        manageFlightsList.innerHTML = '<div class="message info">No flights available!</div>';
        return;
    }
    
    flights.forEach(flight => {
        const flightCard = document.createElement('div');
        flightCard.className = 'flight-card ethiopian-flight admin-flight-card';
        flightCard.innerHTML = `
            <div class="flight-route">${flight.source} → ${flight.destination}</div>
            <div class="flight-details">
                <strong>Flight:</strong> ${flight.flightNumber} <br>
                <strong>Departure:</strong> ${flight.departureTime} <br>
                <strong>Seats Available:</strong> ${flight.seatsAvailable} <br>
                <strong>Price:</strong> $${flight.price}
            </div>
            <div class="flight-management-actions">
                <button class="action-btn update-seats-btn" onclick="openSeatsModal('${flight.flightNumber}')">
                    Update Seats
                </button>
                <button class="action-btn edit-btn" onclick="openEditFlightModal('${flight.flightNumber}')">
                    Edit Flight
                </button>
                <button class="action-btn delete-btn" onclick="showDeleteConfirmation('${flight.flightNumber}')">
                    Delete Flight
                </button>
            </div>
        `;
        manageFlightsList.appendChild(flightCard);
    });
}

// FIXED: Open seats modal - NOW WORKING PROPERLY
function openSeatsModal(flightNumber) {
    console.log('Opening seats modal for:', flightNumber);
    
    flightToManage = flights.find(f => f.flightNumber === flightNumber);
    
    if (!flightToManage) {
        alert('Flight not found!');
        return;
    }
    
    // Update modal content
    document.getElementById('manage-flight-number').textContent = flightNumber;
    document.getElementById('new-seats').value = flightToManage.seatsAvailable;
    document.getElementById('manage-seats-message').innerHTML = '';
    
    // Show the modal
    const seatsModal = document.getElementById('manage-seats-modal');
    if (seatsModal) {
        seatsModal.style.display = 'block';
    }
}

function updateSeats() {
    if (!flightToManage) {
        showMessage('manage-seats-message', 'No flight selected!', 'error');
        return;
    }
    
    const newSeats = parseInt(document.getElementById('new-seats').value);
    
    if (isNaN(newSeats) || newSeats < 0) {
        showMessage('manage-seats-message', 'Please enter a valid number of seats!', 'error');
        return;
    }
    
    flightToManage.seatsAvailable = newSeats;
    localStorage.setItem('flights', JSON.stringify(flights));
    
    showMessage('manage-seats-message', 'Seats updated successfully!', 'success');
    
    setTimeout(() => {
        closeSeatsModal();
        loadFlightsForManagement();
    }, 1500);
}
// ============ FLIGHT EDIT/DELETE FUNCTIONS ============

// Open edit flight modal
function openEditFlightModal(flightNumber) {
    const flight = flights.find(f => f.flightNumber === flightNumber);
    
    if (!flight) {
        alert('Flight not found!');
        return;
    }
    
    // Populate form with flight data
    document.getElementById('edit-flight-number').textContent = flightNumber;
    document.getElementById('edit-flight-original-number').value = flightNumber;
    document.getElementById('edit-flight-number-input').value = flight.flightNumber;
    document.getElementById('edit-flight-source').value = flight.source;
    document.getElementById('edit-flight-destination').value = flight.destination;
    document.getElementById('edit-flight-time').value = flight.departureTime;
    document.getElementById('edit-flight-seats').value = flight.seatsAvailable;
    document.getElementById('edit-flight-price').value = flight.price;
    
    // Clear any previous messages
    document.getElementById('edit-flight-message').innerHTML = '';
    
    // Show modal
    const editModal = document.getElementById('edit-flight-modal');
    if (editModal) {
        editModal.style.display = 'block';
    }
}

// Close edit flight modal
function closeEditFlightModal() {
    const editModal = document.getElementById('edit-flight-modal');
    if (editModal) {
        editModal.style.display = 'none';
    }
}

// Update flight information
function updateFlight(event) {
    event.preventDefault();
    
    const originalNumber = document.getElementById('edit-flight-original-number').value;
    const flightNumber = document.getElementById('edit-flight-number-input').value.trim();
    const source = document.getElementById('edit-flight-source').value.trim();
    const destination = document.getElementById('edit-flight-destination').value.trim();
    const departureTime = document.getElementById('edit-flight-time').value.trim();
    const seatsAvailable = parseInt(document.getElementById('edit-flight-seats').value);
    const price = parseFloat(document.getElementById('edit-flight-price').value);
    
    // Validation
    if (!flightNumber || !source || !destination || !departureTime) {
        showMessage('edit-flight-message', 'Please fill all required fields!', 'error');
        return;
    }
    
    if (isNaN(seatsAvailable) || seatsAvailable < 0) {
        showMessage('edit-flight-message', 'Please enter a valid number of seats!', 'error');
        return;
    }
    
    if (isNaN(price) || price <= 0) {
        showMessage('edit-flight-message', 'Please enter a valid price!', 'error');
        return;
    }
    
    // Check if flight number already exists (for other flights)
    if (flightNumber !== originalNumber) {
        const existingFlight = flights.find(f => f.flightNumber === flightNumber && f.flightNumber !== originalNumber);
        if (existingFlight) {
            showMessage('edit-flight-message', `Flight ${flightNumber} already exists!`, 'error');
            return;
        }
    }
    
    // Find the flight index
    const flightIndex = flights.findIndex(f => f.flightNumber === originalNumber);
    
    if (flightIndex === -1) {
        showMessage('edit-flight-message', 'Flight not found!', 'error');
        return;
    }
    
    // Update flight data
    flights[flightIndex] = {
        ...flights[flightIndex], // Keep existing properties like bookedSeats
        flightNumber,
        source,
        destination,
        departureTime,
        seatsAvailable,
        price
    };
    
    // Update bookings that reference this flight
    bookings.forEach(booking => {
        if (booking.flightNumber === originalNumber) {
            booking.flightNumber = flightNumber;
            booking.source = source;
            booking.destination = destination;
            booking.departureTime = departureTime;
            booking.price = price;
        }
    });
    
    // Save to localStorage
    localStorage.setItem('flights', JSON.stringify(flights));
    localStorage.setItem('bookings', JSON.stringify(bookings));
    
    showMessage('edit-flight-message', 'Flight updated successfully!', 'success');
    
    setTimeout(() => {
        closeEditFlightModal();
        loadFlightsForManagement();
        loadFlights(); // Update passenger view
        loadAllBookings(); // Update admin bookings view
    }, 1500);
}

// Show delete confirmation
function showDeleteConfirmation(flightNumber) {
    const flight = flights.find(f => f.flightNumber === flightNumber);
    
    if (!flight) {
        alert('Flight not found!');
        return;
    }
    
    // Check if there are bookings for this flight
    const flightBookings = bookings.filter(b => b.flightNumber === flightNumber);
    
    document.getElementById('delete-flight-number').textContent = flightNumber;
    document.getElementById('delete-message').innerHTML = '';
    
    if (flightBookings.length > 0) {
        document.getElementById('delete-message').innerHTML = 
            `<div class="message warning">Warning: This flight has ${flightBookings.length} booking(s). Deleting will also remove these bookings.</div>`;
    }
    
    // Store flight number to delete
    window.flightToDelete = flightNumber;
    
    // Show modal
    const deleteModal = document.getElementById('delete-confirmation-modal');
    if (deleteModal) {
        deleteModal.style.display = 'block';
    }
}

// Close delete confirmation modal
function closeDeleteConfirmationModal() {
    const deleteModal = document.getElementById('delete-confirmation-modal');
    if (deleteModal) {
        deleteModal.style.display = 'none';
    }
    window.flightToDelete = null;
}

// Delete flight
function deleteFlight() {
    if (!window.flightToDelete) return;
    
    const flightNumber = window.flightToDelete;
    const flightBookings = bookings.filter(b => b.flightNumber === flightNumber);
    
    // Remove flight
    const flightIndex = flights.findIndex(f => f.flightNumber === flightNumber);
    if (flightIndex !== -1) {
        flights.splice(flightIndex, 1);
    }
    
    // Remove bookings for this flight
    if (flightBookings.length > 0) {
        // Remove bookings from passengers
        passengers.forEach(passenger => {
            if (passenger.bookings) {
                // Get booking IDs to remove
                const bookingIdsToRemove = flightBookings.map(b => b.id);
                passenger.bookings = passenger.bookings.filter(bookingId => 
                    !bookingIdsToRemove.includes(bookingId)
                );
            }
        });
        
        // Remove bookings from main array
        bookings = bookings.filter(b => b.flightNumber !== flightNumber);
    }
    
    // Save to localStorage
    localStorage.setItem('flights', JSON.stringify(flights));
    localStorage.setItem('bookings', JSON.stringify(bookings));
    localStorage.setItem('passengers', JSON.stringify(passengers));
    
    // Also remove seat map for this flight
    const seatMaps = JSON.parse(localStorage.getItem('seatmaps') || '{}');
    if (seatMaps[flightNumber]) {
        delete seatMaps[flightNumber];
        localStorage.setItem('seatmaps', JSON.stringify(seatMaps));
    }
    
    showMessage('delete-message', 'Flight deleted successfully!', 'success');
    
    setTimeout(() => {
        closeDeleteConfirmationModal();
        loadFlightsForManagement();
        loadFlights(); // Update passenger view
        loadAllBookings(); // Update admin bookings view
        loadMyBookings(); // Update passenger bookings if they're logged in
        loadStatistics(); // Update statistics
    }, 1500);
}

function loadAllBookings() {
    const allBookingsList = document.getElementById('all-bookings-list');
    allBookingsList.innerHTML = '';
    
    if (bookings.length === 0) {
        allBookingsList.innerHTML = '<div class="message info">No bookings found!</div>';
        return;
    }
    
    // Filter bookings by status
    const confirmedBookings = bookings.filter(b => !b.status || b.status === 'confirmed');
    const cancelledBookings = bookings.filter(b => b.status === 'cancelled');
    const delayedBookings = bookings.filter(b => b.status === 'delayed');
    
    // Create tabs or sections for different booking statuses
    const tabsHTML = `
        <div class="booking-tabs">
            <button class="booking-tab-btn active" onclick="showBookingTab('all')">All Bookings (${bookings.length})</button>
            <button class="booking-tab-btn" onclick="showBookingTab('confirmed')">Confirmed (${confirmedBookings.length})</button>
            <button class="booking-tab-btn" onclick="showBookingTab('cancelled')">Cancelled (${cancelledBookings.length})</button>
            <button class="booking-tab-btn" onclick="showBookingTab('delayed')">Delayed (${delayedBookings.length})</button>
        </div>
        <div class="booking-tab-content">
            <div id="all-bookings-tab" class="tab-pane active">
                ${renderBookingsList(bookings)}
            </div>
            <div id="confirmed-bookings-tab" class="tab-pane">
                ${confirmedBookings.length > 0 ? renderBookingsList(confirmedBookings) : '<div class="message info">No confirmed bookings found.</div>'}
            </div>
            <div id="cancelled-bookings-tab" class="tab-pane">
                ${cancelledBookings.length > 0 ? renderBookingsList(cancelledBookings) : '<div class="message info">No cancelled bookings found.</div>'}
            </div>
            <div id="delayed-bookings-tab" class="tab-pane">
                ${delayedBookings.length > 0 ? renderBookingsList(delayedBookings) : '<div class="message info">No delayed bookings found.</div>'}
            </div>
        </div>
    `;
    
    allBookingsList.innerHTML = tabsHTML;
}

// Add this helper function to render booking cards
function renderBookingsList(bookingArray) {
    if (bookingArray.length === 0) return '<div class="message info">No bookings found.</div>';
    
    return bookingArray.map(booking => {
        let statusBadge = '';
        if (booking.status === 'cancelled') {
            statusBadge = '<span class="badge cancelled">Cancelled</span>';
        } else if (booking.status === 'delayed') {
            statusBadge = '<span class="badge delayed">Delayed</span>';
        } else if (booking.status === 'pending') {
            statusBadge = '<span class="badge pending">Pending</span>';
        } else {
            statusBadge = '<span class="badge confirmed">Confirmed</span>';
        }
        
        // Format dates nicely
        const bookingDate = booking.bookingDate ? new Date(booking.bookingDate).toLocaleDateString() : 'N/A';
        const cancellationDate = booking.cancellationDate ? new Date(booking.cancellationDate).toLocaleDateString() : null;
        const delayDate = booking.delayDate ? new Date(booking.delayDate).toLocaleDateString() : null;
        
        return `
            <div class="booking-card admin-booking-card ${booking.status || 'confirmed'}">
                <div class="flight-route">
                    ${booking.source} → ${booking.destination} 
                    ${statusBadge}
                </div>
                <div class="flight-details">
                    <div class="booking-info-grid">
                        <div class="info-item">
                            <strong>Passenger:</strong> ${booking.passengerName}
                        </div>
                        <div class="info-item">
                            <strong>Flight:</strong> ${booking.flightNumber}
                        </div>
                        <div class="info-item">
                            <strong>Time:</strong> ${booking.departureTime}
                        </div>
                        <div class="info-item">
                            <strong>Booking Date:</strong> ${bookingDate}
                        </div>
                        <div class="info-item">
                            <strong>Price:</strong> $${booking.price}
                        </div>
                        ${booking.selectedSeat ? `<div class="info-item"><strong>Seat:</strong> ${booking.selectedSeat}</div>` : ''}
                    </div>
                    
                    <!-- Cancellation Details -->
                    ${booking.status === 'cancelled' ? `
                        <div class="status-details cancelled-details">
                            <h4>Cancellation Details:</h4>
                            <div class="details-grid">
                                ${cancellationDate ? `<div><strong>Cancellation Date:</strong> ${cancellationDate}</div>` : ''}
                                ${booking.refundAmount ? `<div><strong>Refund Amount:</strong> $${booking.refundAmount.toFixed(2)}</div>` : ''}
                                ${booking.refundPercentage ? `<div><strong>Refund Percentage:</strong> ${booking.refundPercentage}%</div>` : ''}
                            </div>
                        </div>
                    ` : ''}
                    
                    <!-- Delay Details -->
                    ${booking.status === 'delayed' ? `
                        <div class="status-details delayed-details">
                            <h4>Delay Details:</h4>
                            <div class="details-grid">
                                ${delayDate ? `<div><strong>Delay Date:</strong> ${delayDate}</div>` : ''}
                                ${booking.originalFlightNumber ? `<div><strong>Original Flight:</strong> ${booking.originalFlightNumber}</div>` : ''}
                                ${booking.delayReason ? `<div><strong>Reason:</strong> ${booking.delayReason}</div>` : ''}
                                ${booking.rebookingFee ? `<div><strong>Rebooking Fee:</strong> $${booking.rebookingFee}</div>` : ''}
                            </div>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');
}

// Add this function to handle tab switching
function showBookingTab(tabName) {
    // Update active tab button
    document.querySelectorAll('.booking-tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Show active tab content
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });
    document.getElementById(`${tabName}-bookings-tab`).classList.add('active');
}
// Update the loadStatistics() function in script.js:

function loadStatistics() {
    const statisticsContent = document.getElementById('statistics-content');
    
    const totalFlights = flights.length;
    const totalBookings = bookings.length;
    
    // Calculate by status
    const confirmedBookings = bookings.filter(b => !b.status || b.status === 'confirmed').length;
    const cancelledBookings = bookings.filter(b => b.status === 'cancelled').length;
    const delayedBookings = bookings.filter(b => b.status === 'delayed').length;
    
    // Calculate revenue (excluding cancelled bookings)
    const totalRevenue = bookings
        .filter(b => b.status !== 'cancelled')
        .reduce((sum, booking) => sum + booking.price, 0);
    
    // Calculate refund amount
    const totalRefunded = bookings
        .filter(b => b.status === 'cancelled' && b.refundAmount)
        .reduce((sum, booking) => sum + booking.refundAmount, 0);
    
    const availableSeats = flights.reduce((sum, flight) => sum + flight.seatsAvailable, 0);
    const totalSeats = flights.reduce((sum, flight) => sum + (flight.seatsAvailable + bookings.filter(b => b.flightNumber === flight.flightNumber && b.status !== 'cancelled').length), 0);
    const occupancyRate = totalSeats > 0 ? ((totalSeats - availableSeats) / totalSeats * 100).toFixed(2) : 0;
    
    // Calculate percentages
    const cancelledPercentage = totalBookings > 0 ? ((cancelledBookings / totalBookings) * 100).toFixed(2) : 0;
    const delayedPercentage = totalBookings > 0 ? ((delayedBookings / totalBookings) * 100).toFixed(2) : 0;
    const confirmedPercentage = totalBookings > 0 ? ((confirmedBookings / totalBookings) * 100).toFixed(2) : 0;
    
    statisticsContent.innerHTML = `
        <div class="stats-grid">
            <div class="stat-card">
                <h4>Total Flights</h4>
                <p>${totalFlights}</p>
            </div>
            <div class="stat-card">
                <h4>Total Bookings</h4>
                <p>${totalBookings}</p>
            </div>
            <div class="stat-card">
                <h4>Total Revenue</h4>
                <p>$${totalRevenue}</p>
            </div>
            <div class="stat-card">
                <h4>Total Refunded</h4>
                <p>$${totalRefunded.toFixed(2)}</p>
            </div>
            <div class="stat-card">
                <h4>Available Seats</h4>
                <p>${availableSeats}</p>
            </div>
            <div class="stat-card">
                <h4>Occupancy Rate</h4>
                <p>${occupancyRate}%</p>
            </div>
        </div>
        
        <div class="enhanced-stats">
            <h4>Booking Status Breakdown</h4>
            <div class="booking-stats-summary">
                <div class="stat-card-booking confirmed">
                    <h4>Confirmed</h4>
                    <div class="count">${confirmedBookings}</div>
                    <div class="percentage">${confirmedPercentage}% of total</div>
                </div>
                <div class="stat-card-booking cancelled">
                    <h4>Cancelled</h4>
                    <div class="count">${cancelledBookings}</div>
                    <div class="percentage">${cancelledPercentage}% of total</div>
                </div>
                <div class="stat-card-booking delayed">
                    <h4>Delayed</h4>
                    <div class="count">${delayedBookings}</div>
                    <div class="percentage">${delayedPercentage}% of total</div>
                </div>
            </div>
            
            <div style="margin-top: 20px; background: #f8f9fa; padding: 15px; border-radius: 8px;">
                <h5>Recent Status Changes (Last 7 Days)</h5>
                <div id="recent-changes"></div>
            </div>
        </div>
    `;
    
    // Load recent changes
    loadRecentChanges();
}

// Add this function to show recent status changes
function loadRecentChanges() {
    const recentChangesEl = document.getElementById('recent-changes');
    if (!recentChangesEl) return;
    
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    
    const recentChanges = bookings.filter(booking => {
        const changeDate = booking.cancellationDate || booking.delayDate || booking.bookingDate;
        return new Date(changeDate) >= sevenDaysAgo;
    }).slice(0, 5); // Show only 5 most recent
    
    if (recentChanges.length === 0) {
        recentChangesEl.innerHTML = '<p class="message info">No recent status changes.</p>';
        return;
    }
    
    recentChangesEl.innerHTML = recentChanges.map(booking => {
        const changeType = booking.cancellationDate ? 'Cancelled' : 
                          booking.delayDate ? 'Delayed' : 
                          'Booked';
        const changeDate = booking.cancellationDate || booking.delayDate || booking.bookingDate;
        const formattedDate = new Date(changeDate).toLocaleDateString();
        
        return `
            <div class="recent-change-item" style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid #dee2e6;">
                <div>
                    <strong>${booking.passengerName}</strong> - ${booking.flightNumber}
                    <br>
                    <small>${booking.source} → ${booking.destination}</small>
                </div>
                <div style="text-align: right;">
                    <span class="badge ${changeType.toLowerCase()}">${changeType}</span>
                    <br>
                    <small>${formattedDate}</small>
                </div>
            </div>
        `;
    }).join('');
}
function closeModal() {
    const paymentModal = document.getElementById('payment-modal');
    if (paymentModal) {
        paymentModal.style.display = 'none';
    }
    selectedFlight = null;
}

function closeSeatsModal() {
    const seatsModal = document.getElementById('manage-seats-modal');
    if (seatsModal) {
        seatsModal.style.display = 'none';
    }
    flightToManage = null;
}

function showMessage(elementId, message, type) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = `<div class="message ${type}">${message}</div>`;
        setTimeout(() => {
            element.innerHTML = '';
        }, 5000);
    }
}

function resetSystem() {
    if (confirm('Are you sure you want to reset the entire system? This will delete ALL data including passengers, flights, and bookings!')) {
        localStorage.clear();
        passengers = [];
        admins = [];
        flights = [];
        bookings = [];
        currentUser = null;
        currentAdmin = null;
        
        initializeData();
        
        alert('System has been reset successfully!');
        showScreen('main-menu');
    }
}

// Helper: show/hide email input and optional email button based on passenger age
function adjustEmailVisibilityForUser(user) {
    const emailInput = document.getElementById('passenger-email');
    const emailButton = document.getElementById('emailButton');

    const shouldHide = user && typeof user.age === 'number' && user.age < 6;

    if (emailInput) {
        emailInput.style.display = shouldHide ? 'none' : '';
    }
    if (emailButton) {
        emailButton.style.display = shouldHide ? 'none' : '';
    }
}

// Ensure email visibility is reset when returning to registration/main screens
// so the input is available for normal registration flows.
document.addEventListener('click', function(e) {
    // If user navigates back to registration or main menu, restore visibility
    const target = e.target;
    if (target && (target.getAttribute && (target.getAttribute('onclick') === "showScreen('passenger-register')" || target.getAttribute('onclick') === "showScreen('main-menu')"))) {
        adjustEmailVisibilityForUser(null);
    }
});
// Add these functions to script.js
function showAboutSystem() {
    const aboutModal = document.getElementById('about-system-modal');
    if (aboutModal) {
        aboutModal.style.display = 'block';
    }
}

function closeAboutModal() {
    const aboutModal = document.getElementById('about-system-modal');
    if (aboutModal) {
        aboutModal.style.display = 'none';
    }
}

// Also add to the window click event listener in the DOMContentLoaded section:
document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...
    
   window.addEventListener('click', function(event) {
    const paymentModal = document.getElementById('payment-modal');
    const seatsModal = document.getElementById('manage-seats-modal');
    const seatSelectModal = document.getElementById('seat-modal');
    const aboutModal = document.getElementById('about-system-modal');
    const paymentMethodModal = document.getElementById('payment-method-modal');
    const editFlightModal = document.getElementById('edit-flight-modal');
    const deleteConfirmationModal = document.getElementById('delete-confirmation-modal');
    
    if (event.target === paymentModal) {
        closeModal();
    }
    if (event.target === seatsModal) {
        closeSeatsModal();
    }
    if (event.target === seatSelectModal) {
        closeSeatModal();
    }
    if (event.target === aboutModal) {
        closeAboutModal();
    }
    if (event.target === paymentMethodModal) {
        closePaymentMethodModal();
    }
    if (event.target === editFlightModal) {
        closeEditFlightModal();
    }
    if (event.target === deleteConfirmationModal) {
        closeDeleteConfirmationModal();
    }
});
 // Add this function at the end of script.js, just before the closing brackets

// Reset and recreate flight data with all days of the week
function resetFlightsData() {
    if (confirm('This will reset all flight data. Are you sure?')) {
        flights = [];
        localStorage.removeItem('flights');
        initializeData();
        alert('Flight data has been reset with flights for all days of the week!');
        
        // Refresh flight displays if we're on relevant screens
        if (document.getElementById('flights-list')) {
            loadFlights();
        }
        if (document.getElementById('manage-flights-list')) {
            loadFlightsForManagement();
        }
        
        // Also update existing users display
        loadExistingUsers();
    }
}
    // ... rest of existing code ...
});
