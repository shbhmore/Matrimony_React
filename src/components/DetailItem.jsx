const DetailItem = (label, value ) => (
  <div className="flex flex-col">
    <span className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">{label}</span>
    <span className="text-sm font-semibold text-slate-700 truncate capitalize">{value?.toLowerCase()}</span>
  </div>
);

export default DetailItem;