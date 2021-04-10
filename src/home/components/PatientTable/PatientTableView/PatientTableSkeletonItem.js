const PatientTableSkeletonItem = () => {
  return (
    <tr>
      <td>
        <span className="id" />
      </td>
      <td>
        <span className="gender" />
      </td>
      <td>
        <span className="birth" />
      </td>
      <td>
        <span className="age" />
      </td>
      <td>
        <span className="race" />
      </td>
      <td>
        <span className="ethnicity" />
      </td>
      <td>
        <span className="death" />
      </td>
      <style jsx>{`
        td {
          padding: 10px;
          text-align: center;
        }

        span {
          display: inline-block;
          width: 40px;
          height: 10px;
          border-radius: 4px;
          background-color: #eeeeee;
        }

        .id {
          width: 100px;
        }

        .gender {
          width: 50px;
        }

        .birth {
          width: 250px;
        }

        .age {
          width: 60px;
        }

        .race {
          width: 80px;
        }

        .ethnicity {
          width: 150px;
        }

        .death {
          width: 80px;
        }
      `}</style>
    </tr>
  );
};

export default PatientTableSkeletonItem;
