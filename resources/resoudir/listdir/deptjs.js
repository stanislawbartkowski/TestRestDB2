var DEPT = {
    clickproj: function (row) {
        return {
            "action": "LISTSPEC",
            "restid": "getprojdept",
            "pars": { "deptno": row.deptno },
            "title": {
                "messid": "projfordept",
                "params": [row.deptno]
            }
        }
    },
    titledept: function (row) {
        return {
            "messid": "projfordept",
            "params": [row.deptno]
        }
    }
};
