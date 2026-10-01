export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-14">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <p className="text-gray-400 text-sm mt-3">
              Platform registrasi pendakian gunung yang aman, mudah, dan terintegrasi.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="font-semibold mb-3">Navigasi</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Home</li>
              <li>Booking</li>
              <li>Register</li>
              <li>Login</li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="font-semibold mb-3">Bantuan</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>FAQ</li>
              <li>Kebijakan Privasi</li>
              <li>Syarat & Ketentuan</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-3">Kontak</h4>
            <p className="text-gray-400 text-sm">akhmadoktariski@gmail.com</p>
            <p className="text-gray-400 text-sm mt-2">+62 812 345 678 90</p>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2026 All rights reserved.
        </div>

      </div>
    </footer>
  );
}