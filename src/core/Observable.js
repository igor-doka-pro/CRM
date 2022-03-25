class Observable {
  subcribers = new Map();

  subcribe(subcriber) {
    const key = Symbol('key');
    this.subcribers.set(key, subcriber);

    return () => {
      if (this.subcribers.has(key)) {
        this.subcribers.delete(key);
        return true;
      }

      return false;
    };
  }

  dispatch(...data) {
    for (const subcriber of this.subcribers.values()) {
      subcriber(...data);
    }
  }
}

export default Observable;