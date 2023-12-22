import { create } from 'zustand';

const demo = create((set) => ({
  val: 1,           
  search: (val) => set((state) => ({
    val: val
  })),
  listvalue: [],
setlist:(value)=>set((listvalue)=>{
  return [value,...listvalue]
})
}));

export default demo;
