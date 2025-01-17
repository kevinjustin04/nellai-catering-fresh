/*
// Preact component
//
// name: Top
// description: Literally the top bar
*/
export default function Top() {
  return (
    <div class="bg-black pb-2 pt-4 p-3 flex items-center justify-between">
      <span style="font-family: 'Papyrus'" class="text-red-700 text-3xl">
        Nellai Catering
      </span>
      <div class="flex space-x-2">
        <img src="/phone.png" alt="phone" class="w-5 h-5" />
        <span class="text-yellow-400 text-xl">980 833 6560</span>
      </div>
    </div>
  );
}
