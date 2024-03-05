import { useState, useEffect } from "react";

const localCache = {}

export default function useBreedList() {
    const [breedlist, setBreedList] = useState([]);
    const [status, setStatus] = useState("unloaded");
}